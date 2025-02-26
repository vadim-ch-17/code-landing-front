"use client";
import React, { createContext, useContext, useState } from "react";

export const Context = createContext(null);

interface SiteContextType {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  //   interface Slug {
  //     id: number;
  //     name: string;
  //     translations: {
  //       locale: string;
  //       slug: string;
  //     }[];
  //   }

  //   const [slugs, setSlugs] = useState<Slug[]>([]);
  //   useEffect(() => {
  //     const fetchSlugs = async () => {
  //       const response = await fetch("/api/slugs");
  //       const data = await response.json();
  //       setSlugs(data);
  //     };
  //     fetchSlugs();
  //   }, []);
  const value = {
    isOpenMenu,
    setIsOpenMenu,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
};
