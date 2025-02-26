import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { GET_FOOTER_NAVIGATION } from "@/lib/graphQL/queries";
import Link from "next/link";

interface NavItem {
  title: string;
  path: string;
}
interface NavigationItem {
  title: string;
  items: NavItem[];
}
const Navigation = async () => {
  const { data } = await client.query({
    query: GET_FOOTER_NAVIGATION,
    variables: { navigationIdOrSlug: "footer-navigation", type: "TREE" },
  });

  //   console.dir(data);
  const { renderNavigation } = data;
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-7">
      {renderNavigation.map((item: NavigationItem, idx: number) => (
        <div key={idx}>
          <p className="text-heading-20-28 mb-4 md:mb-6">{item.title}</p>
          <ul className="flex flex-col gap-3 sm:min-w-[160px]">
            {item.items.map((navItem: NavItem, index: number) => (
              <li key={index}>
                <Link
                  href={navItem.path}
                  className="text-body-14-20 hover:text-green transition-all duration-300">
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
