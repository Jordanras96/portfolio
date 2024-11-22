/**
 * @copyright 2024 Jordan Ny Riantsoa Jordan
 * @license Apache-2.0
 */
"use client";
import { TabsMain } from "@/components/Tabs/TabsMain";
import { Tabs } from "@/components/Tabs/TabsSelector";
import { Card, CardFooter } from "@/components/ui/card";
import automationIcon from "@/public/assets/icons/3D A Pair Of Gears.png";
import mechatronicIcon from "@/public/assets/icons/3D Mechanical Robot Arm Model.png";
import writingIcon from "@/public/assets/icons/Comment Writing 3D Model.png";
import websiteIcon from "@/public/assets/icons/Website.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Aside from "../sections/Aside";

interface ChipProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}
const skillIcons = {
  "Web developer": websiteIcon,
  "Automation Engineer": automationIcon,
  "Writter Content": writingIcon,
  "Mecatronic Engineer": mechatronicIcon,
};

const tabs = ["About", "Resume", "Work", "Project", "Contact"];
const SkillsTitle: (keyof typeof skillsFullDescriptions)[] = [
  "Web developer",
  "Automation Engineer",
  "Writter Content",
  "Mecatronic Engineer",
];
const skillsShortDescriptions = {
  "Web developer": "Web development",
  "Automation Engineer": "Automation",
  "Writter Content": "Writting",
  "Mecatronic Engineer": "Mechatronic",
};
const skillsFullDescriptions = {
  "Web developer":
    "Working with me means choosing web development focused on quality and client-centered solutions. I combine technical expertise with a deep understanding of your needs to deliver modern, custom, and high-performing solutions tailored to your goals.",
  "Automation Engineer":
    "As Automation Engineer, I help transform your processes through innovative and efficient automation solutions. By leveraging cutting-edge technologies, I design and implement tailored systems that optimize workflows, increase efficiency, and drive long-term growth. My focus is on delivering scalable, reliable solutions that streamline operations and improve performance.",
  "Writter Content":
    "I offer professional and personalized support in writing your scientific thesis. With a structured and meticulous approach, I help you clarify your ideas, organize your research, and write a coherent, polished document that meets academic standards. My goal is to provide comprehensive assistance, ensuring your thesis reflects the quality of your research while adhering to the requirements of your field.",
  "Mecatronic Engineer":
    "As your Mechatronic Engineer, I design and integrate advanced systems that combine mechanical, electrical, and software engineering. I focus on creating innovative, efficient, and reliable solutions that optimize automation, robotics, and control systems. My goal is to deliver high-performance systems tailored to your needs, enhancing functionality and ensuring seamless operation across diverse applications.",
};

const Chip = ({ text, selected, setSelected }: ChipProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-muted-foreground hover:text-white hover:bg-muted-foreground/75"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative sm:text-sm md:text-base lg:font-mono lg:font-medium`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <div className="flex justify-center items-center">
          <div>
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.45 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-indigo-600 rounded-md text-red-500 focus:text-blue-500 "
            ></motion.span>
          </div>
        </div>
      )}
    </button>
  );
};

export default function Home() {
  const [selected, setSelected] = useState("About");
  return (
    <div>
      <main>
        <Aside />
        <div className="relative max-w-max m-auto xl:min-w-[75%] xl:w-[75%] xl:m-0">
          <Card className="bg-card rounded-tr-3xl">
            <Tabs selected={selected} setSelected={setSelected} />
            {/* <CardContent>
              <CardHeader>
                <CardTitle
                  className={`${
                    selected === "About" ? "mb-4 sm:mb-5  " : ""
                  } relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-muted-foreground rounded-md mb-8 sm:font-semibold sm:pb-4 sm:after:w-10 sm:after:h-1 md:pb-5 capitalize text-2xl font-heading`}
                >
                  {selected === "About" ? "About Me" : selected}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 rounded-3xl  z-10 hidden md:block transition-opacity sm:opacity-0 md:opacity-100 duration-300 fill-mode-backwards ease-in sm:w-[32.5rem] sm:ms-[auto] sm:p-8 md:w-[43.75rem] lg:w-[950px]  xl:w-auto xl:min-h-full">
                {selected === "About" && (
                  <div>
                    <section className="text-muted-foreground text-lg leading-6 sm:mb-10 font-body">
                      <p className="mb-4">
                        I&apos;m Creative Director and UI/UX Designer from
                        Sydney, Australia, working in web development and print
                        media. I enjoy turning complex problems into simple,
                        beautiful and intuitive designs.
                      </p>

                      <p className="mb-4">
                        My job is to build your website so that it is functional
                        and user-friendly but at the same time attractive.
                        Moreover, I add personal touch to your product and make
                        sure that is eye-catching and easy to use. My aim is to
                        bring across your message and identity in the most
                        creative way. I created web design for many famous brand
                        companies.
                      </p>
                    </section>
                    <section className="mb-9">
                      <h3 className="mb-5 capitalize text-xl text-secondary-foreground font-mono">
                        What I&apos;m doing
                      </h3>
                      <div className="grid grid-cols-[1fr] gap-5 lg:grid-cols-[1fr,1fr] lg:gap-y-5 lg:gap-x-6">
                        {SkillsTitle.map((skill) => (
                          <Dialog key={skill}>
                            <DialogTrigger>
                              <Card className="relative p-4 rounded-2xl shadow-xl z-10 before:absolute before:inset-1  before:-z-10 sm:flex sm:justify-start sm:items-start sm:p-8 transition-all duration-300  hover:scale-105 hover:bg-primary hover:text-white">
                                <div className="mb-3 sm:mb-0 sm:mt-1.5">
                                  <Image
                                    src={skillIcons[skill]}
                                    alt={skill}
                                    width={80}
                                    height={80}
                                    className="m-auto block"
                                  />
                                </div>

                                <CardContent className="text-center sm:text-left">
                                  <h4 className="service-item-title h4 mb-7 capitalize text-muted">
                                    {skill}
                                  </h4>
                                  <CardDescription className="service-item-text text-secondary-foreground text-sm font-medium leading-6">
                                    {skillsShortDescriptions[skill]}
                                  </CardDescription>
                                </CardContent>
                              </Card>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="mb-7 capitalize text-muted-foreground">
                                  {skill}
                                </DialogTitle>
                                <DialogDescription className="text-secondary-foreground text-sm font-medium leading-6">
                                  {skillsFullDescriptions[skill]}
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                      <div></div>
                    </section>
                  </div>
                )}
              </CardContent>
              <CardContent>
                {selected === "Resume" && <p>Resume</p>}
              </CardContent>
              <CardContent>{selected === "Work" && <p>Work</p>}</CardContent>
              <CardContent>
                {selected === "Project" && <p>Project</p>}
              </CardContent>
              <CardContent>
                {selected === "Contact" && <p>Contact</p>}
              </CardContent>
              </CardContent> */}
            <TabsMain selected={selected} />

            <CardFooter>footer</CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
