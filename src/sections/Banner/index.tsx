import { Main } from "@/types/fragments";
import React from "react";
import Image from "next/image";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { Heading, Paragraph, Button } from "@/components";
import { getFullURL } from "@/utils/helpers";

const Banner = async () => {
  try {
    const query = createQuery("MainFragment");
    const { data } = await client.query({
      query,
    });

    const { title, description, button, image } = getSectionContent(
      data,
      "main"
    ) as Main;

    if (!data) {
      throw new Error("Section content is empty or not found");
    }

    return (
      <div className="bg-silver py-8 md:py-14 lg:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-[104px]">
            <div className="flex flex-col justify-center order-2 md:order-1 max-w-[657px]">
              {title && (
                <Heading level="h1" classes="mb-4">
                  {title}
                </Heading>
              )}
              {description && <Paragraph>{description}</Paragraph>}
              {button.link && button.text && (
                <Button
                  as="button"
                  url={button.link}
                  classes="sm:w-fit justify-center">
                  {button.text}
                  <span className="sr-only">{button.text} in our app</span>
                </Button>
              )}
            </div>
            {image && (
              <Image
                src={getFullURL(image.url)}
                className="object-cover order-1 md:order-2 mx-auto md:mx-0"
                alt={title}
                width={391}
                height={407}
                priority
              />
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default Banner;
