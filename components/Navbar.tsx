import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar: NextPage = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of Object.keys(sectionsRef.current)) {
        const sectionElement = sectionsRef.current[section];
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    const sectionId = href.replace("#", "");
    const sectionElement = sectionsRef.current[sectionId];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="links flex gap-10 text-slate-600">
          {navItems.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(href);
              }}
              className={`cursor-pointer ${
                activeLink === href.replace("#", "")
                  ? "text-primary ring-2 ring-primary"
                  : "text-primary-foreground hover:text-primary/50"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
