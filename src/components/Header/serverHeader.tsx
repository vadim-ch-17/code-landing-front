import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { GET_HEADER } from "@/lib/graphQL/queries";

interface HeaderNavItem {
  __typename: string;
  path: string;
  title: string;
  type: string;
  order: number;
}

interface ServerHeaderProps {
  children: (data: { renderNavigation: HeaderNavItem[] }) => React.ReactNode;
}

const ServerHeader = async ({ children }: ServerHeaderProps) => {
  const { data } = await client.query({
    query: GET_HEADER,
    variables: { navigationIdOrSlug: "header-navigation" },
  });

  return <>{children(data)}</>;
};

export default ServerHeader;
