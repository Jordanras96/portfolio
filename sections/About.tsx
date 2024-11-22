import { BodyFooterCardAbout } from "@/components/Main/About/BodyFooterCardAbout";
import { BodyContentCardAbout } from "@/components/Tabs/TabsMain";
import { BodyHeaderCardAbout } from "@/components/Tabs/TabsSelector";
import { Card } from "@/components/ui/card";

type AboutProps = {
  selected: string;
  setSelected: (value: string) => void;
};

export default function About({ selected, setSelected }: AboutProps) {
  return (
    <Card className="bg-card rounded-tr-3xl">
      <BodyHeaderCardAbout selected={selected} setSelected={setSelected} />
      <BodyContentCardAbout selected={selected} />
      <BodyFooterCardAbout />
    </Card>
  );
}
