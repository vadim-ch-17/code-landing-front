import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { Marketing } from "@/types/fragments";
import { Button, Heading, Paragraph } from "@/components";
import Image from "next/image";
import { getFullURL } from "@/utils/helpers";
import { IoIosArrowRoundForward } from "react-icons/io";

const CaringMarketing = async () => {
  const query = createQuery("MarketingFragment");

  const { data } = await client.query({
    query,
  });

  const { title, subtitle, cards } = getSectionContent(
    data,
    "marketing"
  ) as Marketing;

  return (
    <div className="pt-6 md:pt-12 pb-10 md:pb-24 container">
      <Heading level="h2" classes="text-center mb-2 max-w-[545px] mx-auto">
        {title}
      </Heading>
      <Paragraph
        classes="text-center max-w-[628px] mx-auto"
        type="sm"
        spacings="md">
        {subtitle}
      </Paragraph>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-[1_1_300px] max-w-[368px] max-h-[366px] w-full h-full relative pb-10">
            <Image
              className="mb-4 rounded-md object-cover"
              src={getFullURL(card.image.url)}
              alt={"Image card"}
              width={368}
              height={266}
            />
            <div className="absolute w-full max-w-[317px] inset-auto bg-silver p-4 rounded-md bottom-0 flex flex-col items-center gap-2 shadow-drop-xs">
              <Heading level="h4" classes="text-center mb-2 !text-lightPrimary">
                {card.description}
              </Heading>
              <Button
                as="link"
                url={card.read_more.url}
                classes="md:w-fit flex items-center gap-2">
                <span>{card.read_more.title}</span>{" "}
                <IoIosArrowRoundForward className="text-[24px]" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaringMarketing;
