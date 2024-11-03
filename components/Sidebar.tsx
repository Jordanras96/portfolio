"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

const icons = {
  email: IoMailOutline,
  phone: IoPhonePortraitOutline,
  birthday: IoCalendarOutline,
  location: IoLocationOutline,
  linkedin: IoLogoLinkedin,
  twitter: IoLogoTwitter,
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`transition-all overflow-hidden rounded-2xl bg-gray-800 p-6 shadow-lg ${
        isOpen ? "max-h-[600px]" : "max-h-[180px]"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/images/my-avatar.png"
          alt="Richard Hanrick"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-white text-xl font-semibold">Richard Hanrick</h1>
        <p className="bg-gray-700 text-sm text-white px-4 py-1 rounded-full">
          Web Developer
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 text-yellow-400 bg-gray-700 hover:bg-yellow-400 hover:text-gray-800 px-4 py-2 rounded-md"
        >
          {isOpen ? "Hide Contacts" : "Show Contacts"}
        </button>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="mt-6 space-y-6">
          <Separator />
          <ContactList />
          <Separator />
          <SocialLinks />
        </div>
      )}
    </aside>
  );
};

const Separator = () => <div className="w-full h-px bg-gray-600" />;

const ContactList = () => (
  <ul className="space-y-4">
    {contacts.map(({ icon, label, value, href }) => (
      <li key={label} className="flex items-center gap-4">
        <IconBox icon={icon} />
        <div className="text-white">
          <p className="text-xs uppercase text-gray-400">{label}</p>
          {href ? (
            <a href={href} className="block truncate">
              {value}
            </a>
          ) : (
            <p>{value}</p>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const SocialLinks = () => (
  <ul className="flex justify-center gap-6">
    <li>
      <a href="#" className="text-gray-400 hover:text-white text-xl">
        <icons.linkedin />
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-white text-xl">
        <icons.twitter />
      </a>
    </li>
  </ul>
);

const IconBox = ({ icon }: { icon: React.ElementType }) => (
  <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-yellow-400 text-2xl">
    {React.createElement(icon)}
  </div>
);

const contacts = [
  {
    icon: icons.email,
    label: "Email",
    value: "richard@example.com",
    href: "mailto:richard@example.com",
  },
  {
    icon: icons.phone,
    label: "Phone",
    value: "+1 (213) 352-2795",
    href: "tel:+12133522795",
  },
  {
    icon: icons.birthday,
    label: "Birthday",
    value: "June 23, 1982",
  },
  {
    icon: icons.location,
    label: "Location",
    value: "Sacramento, California, USA",
  },
];

export default Sidebar;
