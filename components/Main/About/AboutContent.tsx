import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HeaderAbout } from "@/data/DataHeaderAbout";
import {
  skillIcons,
  skillsFullDescriptions,
  skillsShortDescriptions,
  SkillsTitle,
} from "@/data/DataSkills";
import Image from "next/image";

const AboutContent = () => {
  return (
    <div>
      <section className="text-muted-foreground text-lg leading-6 sm:mb-10 font-body">
        <p className="mb-4">{HeaderAbout.who}</p>
        <p className="mb-4">{HeaderAbout.what}</p>
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
                      className="m-auto block" //eto e
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
      </section>
      <section className="mb-8">
        <h3 className="mb-5 sm:mb-6 capitalize text-xl text-secondary-foreground font-mono">
          Testimonials
        </h3>
        <div className="flex justify-start items-start gap-4 my-0 -mx-4 py-7 px-4 overflow-x-auto scroll-smooth overscroll-contain snap-mandatory sm:gap-8 sm:my-0 sm:-mx-8 sm:p-8 sm:pb-9  has-scrollbar">
          <Card className="testimonials-item">
            <CardContent className="content-card">
              <CardTitle className="testimonials-avatar-box">
                <Image
                  src="/assets/images/avatar-1.png"
                  alt="Daniel Lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
              </CardTitle>
              <CardDescription className="testimonials-text">
                {" "}
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
