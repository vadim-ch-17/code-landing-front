import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query RenderNavigation($navigationIdOrSlug: String!) {
    renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
      path
      title
      type
      order
    }
  }
`;

export const GET_FOOTER = gql`
  query Footer {
    global {
      footer {
        logo {
          url
        }
        copyright
        social_link {
          name
          url
          icon {
            url
          }
        }
      }
    }
  }
`;

export const GET_FOOTER_NAVIGATION = gql`
  query RenderNavigation(
    $navigationIdOrSlug: String!
    $type: NavigationRenderType
  ) {
    renderNavigation(navigationIdOrSlug: $navigationIdOrSlug, type: $type) {
      items {
        title
        path
      }
      title
    }
  }
`;

// export const MAIN_QUERY = gql`
//   query Main {
//     landingPage {
//       ...MainFragment
//       ...OurClientsFragment
//       ...CommunityFragment
//       ...Info1Fragment
//       ...OurMetrixFragment
//       ...Info2Fragment
//       ...MarketingFragment
//       ...TestimonialFragment
//     }
//   }
//   ${MAIN_FRAGMENT}
//   ${OUR_CLIENTS_FRAGMENT}
//   ${COMMUNITY_FRAGMENT}
//   ${INFO_1_FRAGMENT}
//   ${OUR_METRIX_FRAGMENT}
//   ${INFO_2_FRAGMENT}
//   ${MARKETING_FRAGMENT}
//   ${TESTIMONIAL_FRAGMENT}
// `;
