"use client"
import * as React from "react";
import CourseCard from "./CourseCard";
import FilterTag from "./FilterTag";
import { useState, useRef } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
const coursesData = [
  {
    image: "/Images/TeacherAvatar.png",
    tag: "طراحی محصول",
    title: "طراحی محصول برای استارتاپ‌ها",
    description: "با یادگیری Python و JavaScript، به دنیای توسعه نرم‌افزار وارد شوید و پروژه‌های واقعی بسازید.",
    teacherRole: "طراح محصول",
    teacherName: "محمد صالحی"
  },
  {
    image: "/Images/TeacherAvatar.png",
    tag: "طراحی محصول",
    title: "طراحی محصول برای استارتاپ‌ها",
    description: "با یادگیری Python و JavaScript، به دنیای توسعه نرم‌افزار وارد شوید و پروژه‌های واقعی بسازید.",
    teacherRole: "طراح محصول",
    teacherName: "محمد صالحی"
  },
  {
    image: "/Images/TeacherAvatar.png",
    tag: "طراحی محصول",
    title: "طراحی محصول برای استارتاپ‌ها",
    description: "با یادگیری Python و JavaScript، به دنیای توسعه نرم‌افزار وارد شوید و پروژه‌های واقعی بسازید.",
    teacherRole: "طراح محصول",
    teacherName: "محمد صالحی"
  },
  {
    image: "/Images/TeacherAvatar.png",
    tag: "برنامه‌نویسی",
    title: "برنامه‌نویسی از صفر تا حرفه‌ای",
    description: "با یادگیری Python و JavaScript، به دنیای توسعه نرم‌افزار وارد شوید و پروژه‌های واقعی بسازید.",
    teacherRole: "برنامه‌نویس ارشد",
    teacherName: "علی رضایی",
    teacherAvatar: "/Images/TeacherAvatar.png"
  },
  {
    image: "/Images/TeacherAvatar.png",
    tag: "مارکتینگ",
    title: "بازاریابی دیجیتال مدرن",
    description: "بهینه‌سازی استراتژی‌های دیجیتال مارکتینگ، از مدیریت شبکه‌های اجتماعی موتورهای جستجو",
    teacherRole: "متخص بازاریابی دیجیتال",
    teacherName: "سارا محمدی",
    teacherAvatar: "/Images/TeacherAvatar.png"
  }
];

const filterTags = [
  { id: "همه", label: "همه", isActive: true,icon:null },
  { id: "برنامه‌نویسی", label: "برنامه نویسی", icon: "/Images/code.png" },
  { id: "مارکتینگ", label: "مارکتینگ", icon: "/Images/Marketing.png" },
  { id: "طراحی محصول", label: "طراحی محصول", icon: "/Images/ProductDesign.png" },
  { id: "گرافیک‌دیزاین", label: "گرافیک‌دیزاین", icon: "/Images/GraphicDesign.png" },
  { id: "ادیت ویدیو", label: "ادیت ویدیو", icon: "/Images/VideoEdit.png" },
];

function CoursesSection() {
  const [activeTab, setActiveTab] = useState("همه");
  const scrollRef = useRef(null);
  
  const dragScroll = useDragToScroll(scrollRef);

  const filteredCourses = coursesData.filter(course => 
    activeTab === "همه" ? true : course.tag === activeTab
  );

  // Function to navigate to next/previous tab
  const navigateTab = (direction) => {
    const currentIndex = filterTags.findIndex(tag => tag.id === activeTab);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 >= filterTags.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? filterTags.length - 1 : currentIndex - 1;
    }
    
    setActiveTab(filterTags[newIndex].id);
  };

  return (
    <main id="courses" className="flex flex-col   w-full mt-32 max-md:px-5">
      <div className="flex flex-col justify-start items-start mr-[64px] max-md:max-w-full">
        <h1 className="w-full text-5xl font-medium text-right text-slate-500 max-md:max-w-full max-md:text-4xl">
         
          <span className="font-light text-black"> جدید‌ترین دوره‌های </span>
          <span className="font-light text-slate-500">مدرسه مسیر!</span>
        </h1>
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mt-8 w-full">
          {filterTags.map((tag) => (
            <FilterTag 
              key={tag.id} 
              {...tag} 
              isActive={activeTab === tag.id}
              onClick={() => setActiveTab(tag.id)}
              icon={tag.icon}  
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-16">
        {filteredCourses.length > 0 ? (
          <div className="relative">
            <ScrollShadow 
              hideScrollBar="true"
              ref={scrollRef}
              orientation="horizontal" 
              className="max-w-[100%]"
              {...dragScroll}
            >
              <div 
                className="inline-flex" 
                style={{ 
                  whiteSpace: 'nowrap',
               
                }}
              >
                {filteredCourses.map((course, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'inline-block',
                      marginRight: index === filteredCourses.length - 1 ? '0' : '40px'
                    }}
                  >
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>
            </ScrollShadow>

            {/* Navigation Controls - Restructured */}
            <div className="flex items-center justify-between mt-5 mx-[64px]">
              {/* Tab Indicators - Now on the right */}
              <div className="flex justify-center gap-2">
                {filterTags.map((tag, index) => (
                  <button
                    key={tag.id}
                    onClick={() => setActiveTab(tag.id)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      tag.id === activeTab 
                        ? 'w-6 bg-gray-700' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Switch to ${tag.label} tab`}
                  />
                ))}
              </div>

              {/* Arrow Buttons  */}
              <div className="flex gap-2 ">
                
                <button
                  onClick={() => navigateTab('next')}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next tab"
                >
                  <IoChevronForward className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={() => navigateTab('prev')}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous tab"
                >
                  <IoChevronBack className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            هیچ دوره‌ای در این دسته‌بندی یافت نشد.
          </p>
        )}
      </div>
    </main>
  );
}

// Add the hook at the top of your file or in a separate hooks file
function useDragToScroll(ref) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
    style: { 
      cursor: isDragging ? 'grabbing' : 'grab',
      userSelect: 'none'  // Prevent text selection while dragging
    }
  };
}

export default CoursesSection;