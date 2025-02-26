"use client";

import React, { useRef, useEffect } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import classNames from "classnames";
import { useSiteContext } from "@/utils/context";
interface HeaderNavItem {
  __typename: string;
  path: string;
  title: string;
  type: string;
  order: number;
}

interface ClientHeaderProps {
  data: { renderNavigation: HeaderNavItem[] };
}

const ClientHeader = ({ data }: ClientHeaderProps) => {
  const { isOpenMenu, setIsOpenMenu } = useSiteContext();
  const refHeader = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (refHeader.current) {
        const header = refHeader.current as HTMLElement;
        header.classList.toggle("shadow-md", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header ref={refHeader} className="bg-silver sticky top-0 z-50">
      <nav className="flex max-w-[1184px] mx-auto px-4 py-4 xs:py-7 sticky top-0 z-50">
        <Link href="/" className="brand-logo">
          <Image
            src="/images/logo_black.svg"
            alt="logo"
            width={155}
            height={24}
            className="max-h-5 xs:max-h-6"
          />
        </Link>
        <ul
          className={classNames(
            "flex fixed md:relative md:space-x-8 md:ml-auto md:mt-0 md:mb-0 top-0 p-4 md:p-0 flex-col md:flex-row w-[50%] bg-silver h-screen md:w-auto md:h-auto translate-y-[50px] xs:translate-y-[80px] md:translate-y-0 transition-all duration-300 ease-in-out",
            isOpenMenu ? "right-0 md:right-auto" : "-right-full md:right-auto"
          )}>
          {data.renderNavigation.map((item: HeaderNavItem) => (
            <li key={item.path}>
              <Link href={item.path} className="text-darkPrimary hover-green">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={classNames(
            "relative block md:hidden w-fit h-auto p-2 mt-auto mr-0 mb-0 ml-auto"
          )}
          onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <span
            className={classNames("burger", {
              active: isOpenMenu,
            })}></span>
        </button>
      </nav>
    </header>
  );
};

export default ClientHeader;
