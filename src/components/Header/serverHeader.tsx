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
  try {
    const { data } = await client.query({
      query: GET_HEADER,
      variables: { navigationIdOrSlug: "header-navigation" },
    });

    if (!data || !data.renderNavigation) {
      return <div>No navigation data available</div>;
    }

    return <>{children(data)}</>;
  } catch (error) {
    console.error("Error fetching header navigation:", error);
    return <div>Error fetching navigation data</div>;
  }
};

export default ServerHeader;
