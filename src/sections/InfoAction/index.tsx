import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import Image from "next/image";
import { InfoActionType } from "@/types/fragments";
import { Heading, Paragraph, Button } from "@/components";
import { getFullURL } from "@/utils/helpers";
import { FragmentNames } from "@/lib/graphQL/hooks";
import { SectionName } from "@/types/fragments";
interface InfoActionProps {
  fragment: FragmentNames;
  sectionName: SectionName;
}
const InfoAction = async ({ fragment, sectionName }: InfoActionProps) => {
  const query = createQuery(fragment);
  const { data } = await client.query({
    query,
  });
  const { title, description, image, button } = getSectionContent(
    data,
    sectionName
  ) as InfoActionType;
  return (
    <div className="container py-6 md:py-8 lg:py-10 flex flex-col md:flex-row gap-8 md:gap-[50px]">
      <Image
        src={getFullURL(image.url)}
        className="mx-auto"
        alt={title}
        width={441}
        height={328}
      />
      <div className="max-w-[601px] flex flex-col justify-center">
        <Heading level="h2" classes="mb-2">
          {title}
        </Heading>
        <Paragraph type="sm">{description}</Paragraph>
        {button && (
          <Button as="button" classes="md:w-fit">
            {button.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoAction;
