import {
  MAIN_FRAGMENT,
  OUR_CLIENTS_FRAGMENT,
  COMMUNITY_FRAGMENT,
  INFO_1_FRAGMENT,
  OUR_METRIX_FRAGMENT,
  INFO_2_FRAGMENT,
  MARKETING_FRAGMENT,
  TESTIMONIAL_FRAGMENT,
  GET_DEMO_FRAGMENT,
} from "./fragments";

import { gql } from "@apollo/client";

const fragmentsMap = {
  MainFragment: MAIN_FRAGMENT,
  OurClientsFragment: OUR_CLIENTS_FRAGMENT,
  CommunityFragment: COMMUNITY_FRAGMENT,
  Info1Fragment: INFO_1_FRAGMENT,
  OurMetrixFragment: OUR_METRIX_FRAGMENT,
  Info2Fragment: INFO_2_FRAGMENT,
  MarketingFragment: MARKETING_FRAGMENT,
  TestimonialFragment: TESTIMONIAL_FRAGMENT,
  GetDemoFragment: GET_DEMO_FRAGMENT,
};

export type FragmentNames =
  | "MainFragment"
  | "OurClientsFragment"
  | "CommunityFragment"
  | "Info1Fragment"
  | "OurMetrixFragment"
  | "Info2Fragment"
  | "MarketingFragment"
  | "TestimonialFragment"
  | "GetDemoFragment";

export const createQuery = (fragmentName: FragmentNames) => {
  const fragment = fragmentsMap[fragmentName];
  if (!fragment) {
    throw new Error(`Fragment ${fragmentName} not found`);
  }

  return gql`
    query Main {
        landingPage {
        ...${fragmentName}
      }
    }
    ${fragment}
  `;
};
