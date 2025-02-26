import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { OurMetrix } from "@/types/fragments";
import { Heading, Paragraph } from "@/components";
import Image from "next/image";
import { getFullURL } from "@/utils/helpers";

const Metrix = async () => {
  const query = createQuery("OurMetrixFragment");

  const { data } = await client.query({
    query,
  });

  const { title, subtitle, metrix } = getSectionContent(
    data,
    "ourMetrix"
  ) as OurMetrix;

  return (
    <div className="bg-silver py-8 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 ">
          <div className="flex flex-col justify-center max-w-[420px]">
            <Heading level="h2" classes="mb-2">
              {title}
            </Heading>
            <Paragraph type="sm">{subtitle}</Paragraph>
          </div>
          <div className="metrix flex flex-wrap gap-x-8 gap-y-10">
            {metrix.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center flex-[1_0_220px] gap-4">
                <Image
                  className="shrink-0 flex self-start"
                  src={getFullURL(item.icon.url)}
                  alt={item.title}
                  width={48}
                  height={48}
                />
                <div className="flex flex-col self-start">
                  <Heading level="h3" classes=" mb-2 capitalize">
                    {item.description}
                  </Heading>
                  <Paragraph type="xs" spacings="zero">
                    {item.title}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrix;
