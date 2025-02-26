import { gql } from "@apollo/client";

export const MAIN_FRAGMENT = gql`
  fragment MainFragment on LandingPage {
    main {
      title
      description
      image {
        url
      }
      button {
        link
        text
      }
    }
  }
`;

export const OUR_CLIENTS_FRAGMENT = gql`
  fragment OurClientsFragment on LandingPage {
    our_clients {
      title
      subtitle
      clients {
        text
        logo {
          url
        }
      }
    }
  }
`;

export const COMMUNITY_FRAGMENT = gql`
  fragment CommunityFragment on LandingPage {
    community {
      title
      subtitle
      cards {
        title
        description
        icon {
          url
        }
      }
    }
  }
`;

export const INFO_1_FRAGMENT = gql`
  fragment Info1Fragment on LandingPage {
    info_1 {
      title
      description
      image {
        url
      }
      button {
        text
        link
      }
    }
  }
`;

export const OUR_METRIX_FRAGMENT = gql`
  fragment OurMetrixFragment on LandingPage {
    ourMetrix {
      title
      subtitle
      metrix {
        title
        description
        icon {
          url
        }
      }
    }
  }
`;

export const INFO_2_FRAGMENT = gql`
  fragment Info2Fragment on LandingPage {
    info_2 {
      title
      description
      image {
        url
      }
    }
  }
`;

export const MARKETING_FRAGMENT = gql`
  fragment MarketingFragment on LandingPage {
    marketing {
      title
      subtitle
      cards {
        description
        image {
          url
        }
        read_more {
          url
          title
        }
      }
    }
  }
`;

export const TESTIMONIAL_FRAGMENT = gql`
  fragment TestimonialFragment on LandingPage {
    testimonial {
      testomonial
      position
      author
      image {
        url
      }
      customers {
        url
      }
    }
  }
`;

export const GET_DEMO_FRAGMENT = gql`
  fragment GetDemoFragment on LandingPage {
    getDemo {
      title
      goTo {
        link
        text
      }
    }
  }
`;
