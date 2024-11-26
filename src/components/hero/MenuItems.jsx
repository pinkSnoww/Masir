"use client";

import { Button } from "@nextui-org/react";
import * as React from "react";
import { useRouter } from 'next/navigation';

const menuItems = [
  { text: "تماس‌باما", id: "contactUs" },
  { text: "درباره‌ما", id: "aboutUs" },
  { text: "پادکست‌ها", id: "podcast" },
  { text: "وبینار‌ها", id: "webinars" },
  { text: "دوره‌ها", id: "courses" }
];

export function MenuItems() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="flex flex-col md:flex-row justify-center items-center my-auto text-lg leading-6 font-light text-right text-gray-200 whitespace-nowrap min-w-[240px] max-md:max-w-full">
      <button onClick={toggleMenu} className="md:hidden">
        <span className="block w-6 h-0.5 bg-gray-200 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-200 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-200"></span>
      </button>
      <div className={`flex flex-col md:flex-row ${isOpen ? 'block' : 'hidden md:block'}`}>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            className="gap-2 self-stretch px-2.5 my-auto rounded-2xl min-h-[40px] hover:bg-gray-700 transition-colors"
            onClick={() => handleClick(item.id)}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </nav>
  );
}