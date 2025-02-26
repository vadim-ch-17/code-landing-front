import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { OurClients } from "@/types/fragments";
import { Heading, Paragraph } from "@/components";

import { getFullURL } from "@/utils/helpers";
import Image from "next/image";
const Clients = async () => {
  const query = createQuery("OurClientsFragment");
  const { data } = await client.query({
    query,
  });
  const { title, subtitle, clients } = getSectionContent(
    data,
    "our_clients"
  ) as OurClients;

  return (
    <div className="container py-6 md:py-8 lg:py-10">
      <Heading level="h2" classes="text-center  mb-2">
        {title}
      </Heading>
      <Paragraph classes="text-center">{subtitle}</Paragraph>
      <div className="cliets-container flex flex-wrap max-w-[1152px] mx-auto justify-center gap-8 md:gap-20 lg:gap-[136px] mt-4">
        {clients.length &&
          clients.map((client, index) => (
            <Image
              key={index}
              src={getFullURL(client.logo.url)}
              height="48"
              width="48"
              alt="Icon our client"
            />
          ))}
      </div>
    </div>
  );
};

export default Clients;
