import { LandingPage, SectionContent, SectionName } from "@/types/fragments";

export const getSectionContent = (
  data: { landingPage: LandingPage } | undefined,
  section: SectionName
): SectionContent | undefined => {
  return data?.landingPage[section];
};
