import { CardHeader, CardTitle } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { tabs } from "@/data/DataTabs";

interface TabsProps {
  selected: string;
  setSelected: (value: string) => void;
}

export function Tabs({ selected, setSelected }: TabsProps) {
  return (
    <CardHeader className="fixed bottom-0 left-0 w-full bg-secondary border border-border rounded-bl-xl rounded-tr-xl shadow-xl z-50 sm:rounded-bl-3xl sm:rounded-tr-3xl lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:max-w-max lg:rounded-se-3xl lg:py-0 lg:px-5 lg:shadow-none">
      <CardTitle>
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center px-3 py-4">
            {tabs.map((tab) => (
              <Chip
                text={tab}
                selected={selected === tab}
                setSelected={setSelected}
                key={tab}
              />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </CardTitle>
    </CardHeader>
  );
}
