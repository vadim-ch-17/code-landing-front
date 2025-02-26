import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { GET_FOOTER } from "@/lib/graphQL/queries";
import Image from "next/image";
import { getFullURL } from "@/utils/helpers";
import Navigation from "./Navigation";
import Subscribe from "@/components/SubscribeForm";

interface FooterSocialLink {
  name: string;
  url: string;
  icon: {
    url: string;
  };
}
const Footer = async () => {
  const { data } = await client.query({
    query: GET_FOOTER,
    // variables: {navigationIdOrSlug: "footer-navigation"},
  });

  const { global } = data;
  //   console.log(global.footer);
  return (
    <div className="bg-darkPrimary pt-16 pb-[74px] text-silver">
      <div className="container flex flex-wrap gap-10 md:gap-[40px] lg:gap-[80px] ">
        <div className="flex flex-col gap-6 md:gap-10 sm:min-w-[350px]">
          <Image
            src={getFullURL(global.footer.logo.url)}
            className="max-w-[160] h-auto md:max-w-[191px]"
            alt="Logo"
            width={191}
            height={29}
            loading="lazy"
          />
          <p className="text-body-14-20 max-w-[224px]">
            {global.footer.copyright}
          </p>
          <div className="flex">
            {global.footer.social_link.length &&
              global.footer.social_link.map(
                (link: FooterSocialLink, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 flex rounded-full p-2 bg-lightGray relative top-0 hover:bg-mediumPrimary hover:top-0.5 transition-all duration-300 ease-in-out">
                    <Image
                      src={getFullURL(link.icon.url)}
                      className="shrink-0 inset-center"
                      alt={link.name}
                      width={24}
                      height={24}
                    />
                  </a>
                )
              )}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8">
          <Navigation />
          <div className="flex flex-col">
            <p className="text-heading-20-28 mb-4 md:mb-6">Stay up to date</p>
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
