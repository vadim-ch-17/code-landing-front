import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { Community } from "@/types/fragments";
import { Heading, Paragraph } from "@/components";
import { getFullURL } from "@/utils/helpers";
import Image from "next/image";

const ManageCommunity = async () => {
  const query = createQuery("CommunityFragment");

  const { data } = await client.query({
    query,
  });

  const { title, subtitle, cards } = getSectionContent(
    data,
    "community"
  ) as Community;

  return (
    <div className="container py-6 md:py-8 lg:py-10">
      <Heading level="h2" classes="text-center  mb-2 max-w-[545px] mx-auto">
        {title}
      </Heading>
      <Paragraph classes="text-center">{subtitle}</Paragraph>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-[128px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-[1_0_250px] max-w-[300px] p-6 md:p-8 rounded-md bg-white shadow-drop-sm ">
            <Image
              className="mb-4"
              src={getFullURL(card.icon.url)}
              alt={card.title}
              width={65}
              height={56}
            />
            <Heading level="h3" classes="text-center mb-2">
              {card.title}
            </Heading>
            <Paragraph type="xs" classes="text-center">
              {card.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCommunity;
