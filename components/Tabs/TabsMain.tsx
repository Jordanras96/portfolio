import AboutContent from "@/components/Main/About/AboutContent";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TabsMainProps {
  selected: string;
}

export function TabsMain({ selected }: TabsMainProps) {
  return (
    <CardContent>
      <CardHeader>
        <CardTitle
          className={`${
            selected === "About" ? "mb-4 sm:mb-5" : ""
          } relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-muted-foreground rounded-md mb-8 sm:font-semibold sm:pb-4 sm:after:w-10 sm:after:h-1 md:pb-5 capitalize text-2xl font-heading`}
        >
          {selected === "About" ? "About Me" : selected}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 rounded-3xl z-10 hidden md:block transition-opacity sm:opacity-0 md:opacity-100 duration-300 fill-mode-backwards ease-in sm:w-[32.5rem] sm:ms-[auto] sm:p-8 md:w-[43.75rem] lg:w-[950px] xl:w-auto xl:min-h-full">
        {selected === "About" && <AboutContent />}
        {selected === "Resume" && <p>Resume</p>}
        {selected === "Work" && <p>Work</p>}
        {selected === "Project" && <p>Project</p>}
        {selected === "Contact" && <p>Contact</p>}
      </CardContent>
    </CardContent>
  );
}
