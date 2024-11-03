import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContentCardAside } from "../components/Aside/ContentCardAside";
import { FooterCardAside } from "../components/Aside/FooterCardAside";
import { HeaderCardAside } from "../components/Aside/HeaderCardAside";

const PrimarySkills = [
  "Web developer",
  "Automation Enginneer",
  "Mecatronic Engineer",
  "Writter Content",
];
const imageInfo = {
  src: "/assets/images/my-avatar.png",
  alt: "Jordan Rasoloarison",
};

const Aside = () => {
  return (
    <aside>
      <Card className="bg-card border border-border rounded-3xl p-4 z-10 mb-4 max-h-28 overflow-hidden transition-all duration-300 transform active:max-h-[25.3125rem] sm:w-[32.5rem] sm:ml-auto sm:me-auto sm:max-h-48 md:w-[43.75rem] lg:w-[59.375rem] lg:shadow-lg xl:w-auto xl:sticky xl:top-16 xl:max-h-max xl:h-full xl:mb-0 xl:pt-16 xl:z-10">
        <HeaderCardAside imageInfo={imageInfo} primarySkills={PrimarySkills} />
        <Separator />
        <ContentCardAside />
        <Separator />
        <FooterCardAside />
      </Card>
    </aside>
  );
};

export default Aside;
