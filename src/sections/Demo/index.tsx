import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { GetDemo } from "@/types/fragments";
import { Heading, Button } from "@/components";

const Demo = async () => {
  const query = createQuery("GetDemoFragment");
  const { data } = await client.query({
    query,
  });
  const { title, goTo } = getSectionContent(data, "getDemo") as GetDemo;
  return (
    <div className="bg-silver py-6 md:py-8">
      <div className="container">
        <Heading
          level="h2"
          classes="text-center  mb-2 max-w-[887px] mx-auto md:!text-heading-64-76 !text-darkPrimary">
          {title}
        </Heading>
        <Button as="button" classes="md:w-fit mx-auto">
          {goTo.text}
        </Button>
      </div>
    </div>
  );
};

export default Demo;
