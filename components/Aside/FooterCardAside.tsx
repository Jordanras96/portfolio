import { CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export function FooterCardAside() {
  return (
    <CardFooter className="flex justify-center gap-4">
      <SocialLink
        href="https://linkedin.com"
        icon={<IoLogoLinkedin size={24} />}
      />
      <SocialLink href="https://github.com" icon={<IoLogoGithub size={24} />} />
      <SocialLink
        href="https://twitter.com"
        icon={<IoLogoTwitter size={24} />}
      />
    </CardFooter>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}
