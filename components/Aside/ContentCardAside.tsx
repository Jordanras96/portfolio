import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

export function ContentCardAside() {
  return (
    <CardContent className="opacity-0 hidden md:opacity-100 md:block duration-300 transition-all transform">
      <ContactItem
        icon={<IoMailOutline size={35} />}
        label="Email"
        content="riantsoa96@gmail.com"
      />
      <ContactItem
        icon={<IoPhonePortraitOutline size={35} />}
        label="Phone"
        content="+261 34 14 406 98"
      />
      <ContactItem
        icon={<IoCalendarOutline size={35} />}
        label="Birthday"
        content="July 10, 1996"
      />
      <ContactItem
        icon={<IoLocationOutline size={35} />}
        label="Location"
        content="Antsirabe, Vakinankaratra, Madagascar"
      />
    </CardContent>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  content: string;
};

function ContactItem({ icon, label, content }: ContactItemProps) {
  return (
    <div className="flex gap-3 py-4">
      <div className="relative bg-card/95 w-8 h-8 rounded-xl flex justify-center items-center text-lg text-center text-primary drop-shadow-md z-10 before:absolute before:inset-1 before:bg-card/75 before:rounded-sm before:-z-10 sm:w-12 sm:h-12 sm:rounded-xl sm:text-sm">
        {icon}
      </div>
      <div className="max-w-[calc(100%-46)] w-[calc(100%-46)]">
        <Label>{label}</Label>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}
