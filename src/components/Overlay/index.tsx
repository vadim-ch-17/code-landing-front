"use client";
import React from "react";
import classNames from "classnames";
import { useSiteContext } from "@/utils/context";

const Overlay = () => {
  const { isOpenMenu, setIsOpenMenu } = useSiteContext();
  return (
    <div
      className={classNames(
        "fixed h-screen top-0 bg-black bg-opacity-50 z-50 w-1/2 transition-all duration-300",

        isOpenMenu ? "left-0" : "-left-full"
      )}
      onClick={() => isOpenMenu && setIsOpenMenu(false)}></div>
  );
};

export default Overlay;
