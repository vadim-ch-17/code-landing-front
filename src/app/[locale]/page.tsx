// import { useTranslations } from "next-intl";

// import Button from "@/components/Button";
import {
  Banner,
  Clients,
  ManageCommunity,
  InfoAction,
  Metrix,
  CaringMarketing,
  Demo,
} from "@/sections";
export default function HomePage() {
  // const t = useTranslations("HomePage");

  return (
    <div>
      <Banner />
      <Clients />
      <ManageCommunity />
      <InfoAction fragment="Info1Fragment" sectionName="info_1" />
      <Metrix />
      <InfoAction fragment="Info2Fragment" sectionName="info_2" />
      <CaringMarketing />
      <Demo />
    </div>
  );
}
