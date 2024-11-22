/**
 * @copyright 2024 Jordan Ny Riantsoa Jordan
 * @license Apache-2.0
 */

import { Button } from "@/components/ui/button";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header: NextPage = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <Link href="/" className="logo">
            <Image
              src="/portfolio/public/assets/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </Link>
        </h1>
        <div className="relative md:justify-self-center">
          <Button className="menu-btn md:hidden">menu</Button>
          <Navbar />
        </div>
        <Link href="/contact" className="">
          {" "}
          Contact me{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
