import * as React from "react";

const navigationItems = [
  { text: "خانه", id: "home" },
  { text: "سوالات متداول", id: "faq" },
  { text: "حریم خصوصی", id: "privacy" },
  { text: "تماس با ما", id: "contact" },
  { text: "درباره ما", id: "about" },


 
];

export function NavigationLinks() {
  return (
    <nav className="flex flex-wrap gap-8 justify-end items-center text-lg font-light text-center text-white max-md:max-w-full">
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="gap-2 self-stretch my-auto"
          tabIndex="0"
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}