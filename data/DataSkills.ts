import automationIcon from "@/public/assets/icons/3D A Pair Of Gears.png";
import mechatronicIcon from "@/public/assets/icons/3D Mechanical Robot Arm Model.png";
import writingIcon from "@/public/assets/icons/Comment Writing 3D Model.png";
import websiteIcon from "@/public/assets/icons/Website.png";

export const skillIcons = {
  "Web developer": websiteIcon,
  "Automation Engineer": automationIcon,
  "Writter Content": writingIcon,
  "Mecatronic Engineer": mechatronicIcon,
};

export const SkillsTitle = [
  "Web developer",
  "Automation Engineer",
  "Writter Content",
  "Mecatronic Engineer",
] as const;

export const skillsShortDescriptions = {
  "Web developer": "Web development",
  "Automation Engineer": "Automation",
  "Writter Content": "Writting",
  "Mecatronic Engineer": "Mechatronic",
};

export const skillsFullDescriptions = {
  "Web developer":
    "Working with me means choosing web development focused on quality...",
  "Automation Engineer":
    "As Automation Engineer, I help transform your processes...",
  "Writter Content": "I offer professional and personalized support...",
  "Mecatronic Engineer":
    "As your Mechatronic Engineer, I design and integrate...",
};
