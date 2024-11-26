import React from 'react';

function NavigationLinks() {
  const links = [
    { title: 'دوره‌ها', href: '#' },
    { title: 'وبینار‌ها', href: '#' },
    { title: 'پادکست‌ها', href: '#' },
    { title: 'درباره ما', href: '#' },
    { title: 'تماس با ما', href: '#' },
    { title: 'حریم خصوصی', href: '#' },
    { title: 'سوالات متداول', href: '#' },
  ];

  return (
    <nav className="flex flex-wrap gap-10 items-start font-light min-w-[240px] max-md:max-w-full">
      <ul className="flex flex-col justify-center items-end">
        {links.slice(0, 3).map((link, index) => (
          <li key={index} className={`gap-2 self-stretch ${index > 0 ? 'mt-6' : ''}`}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col justify-center items-end">
        {links.slice(3).map((link, index) => (
          <li key={index} className={`gap-2 self-stretch ${index > 0 ? 'mt-6' : ''}`}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationLinks;