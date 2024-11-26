'use client';
import { Image, ScrollShadow } from "@nextui-org/react";
import { useRef, useState } from "react";

const TeacherCard = ({ name, brand, imageSrc, expertise }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const teachers = [
    {
      id: 1,
      imageSrc: "/images/Mentors.png",
      expertise: "استراتژی بازاریابی دیجیتال",
      name: "سارا امیری",
      brand: "مدیر دیجیتال مارکتینگ در شرکت آرمان‌وب",
    },
    {
      id: 2,
      imageSrc: "/images/Mentors.png",
      expertise: "طراحی تجربه کاربری",
      name: "محمد رضایی",
      brand: "موسس و مدیرعامل شرکت خلاق‌کالا",
    },
    {
      id: 3,
      imageSrc: "/images/Mentors.png",
      expertise: "توسعه وب با جاوااسکریپت",
      name: "علیرضا حسینی",
      brand: "برنامه‌نویس ارشد و موسس استارتاپ نرم‌افزارگستر",
    },
    {
      id: 4,
      imageSrc: "/images/Mentors.png",
      expertise: "توسعه وب با جاوااسکریپت",
      name: "علیرضا حسینی",
      brand: "برنامه‌نویس ارشد و موسس استارتاپ نرم‌افزارگستر",
    },
    {
      id: 5,
      imageSrc: "/images/Mentors.png",
      expertise: "توسعه وب با جاوااسکریپت",
      name: "علیرضا حسینی",
      brand: "برنامه‌نویس ارشد و موسس استارتاپ نرم‌افزارگستر",
    },
    // Add more teachers as needed
  ];

  return (
    <div className="relative w-full h-full overflow-hidden  rounded-lg">
      <ScrollShadow 
        ref={scrollRef}
        size={500}
        radius="none"
     
        orientation="horizontal" 
        className="max-w-[100%] cursor-grab active:cursor-grabbing"
        style={{
          borderRadius: '30px',
       
        }}
        hideScrollBar="true"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
       
      >
        <div className="flex gap-4 min-w-max rounded-lg  px-4">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="w-[417px] h-[679px] flex-none rounded-lg relative"
              style={{ userSelect: 'none' }}
              
            >
              <div className="relative overflow-hidden  rounded-lg h-full shadow-2xl">
                <Image
                  width={417}
                  height={679}
                  radius="md"
                  alt={`${teacher.name} Image`}
                  src={teacher.imageSrc}
                  style={{objectFit: 'cover',borderRadius: '24px'}}
                  className="w-full h-full shadow-lg"
                />
                <div className="absolute top-4 left-4 text-left z-50 rounded-lg">
                  <p className="text-sm text-white inline-flex items-center rounded-lg bg-gray-500 opacity-70 px-2 py-1">{teacher.expertise}</p>
                </div>
                <div className="absolute bottom-4 right-4 text-right z-50">
                  <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
                  <p className="text-sm text-gray-200">{teacher.brand}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

export default TeacherCard;
