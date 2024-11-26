"use client";
import React, { useState, useRef, useCallback } from 'react';
import { IoArrowBack , IoArrowForward  } from "react-icons/io5";
import SectionTitle from './SectionTitle';
import CourseCard from './CourseCard';
import { Image, ScrollShadow } from "@nextui-org/react";
const mockCourses = [
  { id: 1, image: "/Images/ImageMentorCourse.png", tag: "برنامه‌نویسی", title: "دوره جامع برنامه نویسی پایتون", description: "در این دوره شما با مفاهیم پایه برنامه نویسی و زبان پایتون آشنا خواهید شد و پروژه‌های کاربردی را توسعه خواهید داد.", teacherName: "علی رضایی", teacherRole: "مدرس ارشد", teacherAvatar: "/Images/teacher1.jpg" },
  { id: 2, image: "/Images/ImageMentorCourse1.png", tag: "طراحی محصول", title: "طراحی محصول برای استارتاپ‌ها", description: "آموزش اصول طراحی محصول، تحقیقات کاربری و پیاده‌سازی UI/UX برای کسب و کارهای نوپا", teacherName: "مریم محمدی", teacherRole: "طراح ارشد", teacherAvatar: "/Images/teacher2.jpg" },
  { id: 3, image: "/Images/ImageMentorCourse2.png", tag: "مارکتینگ", title: "دیجیتال مارکتینگ پیشرفته", description: "استراتژی‌های بازاریابی دیجیتال، سئو، تبلیغات و مدیریت شبکه‌های اجتماعی", teacherName: "حسین کریمی", teacherRole: "مدیر مارکتینگ", teacherAvatar: "/Images/teacher3.jpg" },
  { id: 4, image: "/Images/ImageMentorCourse.png", tag: "گرافیک‌ دیزاین", title: "آموزش جامع فتوشاپ و ایلوستریتور", description: "از صفر تا صد طراحی گرافیکی با نرم‌افزارهای ادوبی برای طراحان مبتدی تا پیشرفته", teacherName: "زهرا احمدی", teacherRole: "طراح گرافیک", teacherAvatar: "/Images/teacher4.jpg" },
  { id: 5, image: "/Images/ImageMentorCourse.png", tag: "برنامه‌نویسی", title: "توسعه وب با React.js", description: "آموزش کامل ری‌اکت از مبتدی تا پیشرفته همراه با پروژه‌های عملی و کاربردی", teacherName: "محمد حسیی", teacherRole: "توسعه‌دهنده ارشد", teacherAvatar: "/Images/teacher5.jpg" }
];

function CourseSectionPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  const handleArrowClick = (direction) => {
    const cardWidth = cardRef.current.offsetWidth;
    const newPage = direction === 'prev' ? currentPage - 1 : currentPage + 1;

    if (newPage >= 0 && newPage < mockCourses.length) {
      setCurrentPage(newPage);
      scrollRef.current.scrollLeft = cardWidth * newPage; // Scroll by the width of one card
    }
  };
    const scrollToCard = (index) => {
      setCurrentPage(index);
    const cardWidth = cardRef.current.offsetWidth; // Get the width of a course card
    scrollRef.current.scrollLeft = cardWidth * index
    };
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
  return (
    <main className="flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
         <div className="inline-block overflow-hidden place-items-center mx-[64px] h-[1163px]  pt-4 pb-28 py-24 lg:w-full bg-neutral-900  min-h-[704px]  rounded-[32px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
         <SectionTitle />

        
        <ScrollShadow 
        ref={scrollRef}
        size={300}
        orientation="horizontal" 
        className="w-full cursor-grab mt-10 active:cursor-grabbing"
        
        hideScrollBar="true"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
       
      >
        {/* <div  className="relative w-full overflow-auto  mt-10 rounded-lg"> */}
            <div className="flex gap-10 ">
              {mockCourses.map((course, index) => (
                <div
                  key={course.id}
                  className={'flex '}
                 
                >
                  <CourseCard ref={cardRef} {...course} />
                 </div>
              ))}
            </div>
            {/* </div> */}
          </ScrollShadow>
          <div className="flex items-center justify-between w-full  mt-12">
          <div className="flex gap-3 overflow-x-auto mr-10 hide-scrollbar py-2">
            {Array.from({ length: Math.ceil(mockCourses.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index * 2)}
                className={`flex-none transition-all duration-300 rounded-full ${index === currentPage ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Course ${index * 2 + 1} to ${index * 2 + 2}`}
              />
            ))}
          </div>

          <div className="flex gap-2 ml-4">
          <div className="flex flex-grow items-center justify-center gap-x-2">
          <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-gray-800 p-2" >
            <button
              onClick={() => handleArrowClick('prev')}
              className={`p-2 rounded-full transition-colors ${currentPage === 0 ? 'bg-gray-800 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600'}`}
              disabled={currentPage === 0}
              aria-label="Previous courses"
            >
              <IoArrowForward className="w-6 h-6 text-white" />
            </button>
            </div>
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-gray-800 p-2" >
            <button
              onClick={() => handleArrowClick('next')}
              className={`p-2 rounded-full transition-colors ${currentPage === Math.ceil(mockCourses.length / 2) - 1 ? 'bg-gray-800 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600'}`}
              disabled={currentPage === Math.ceil(mockCourses.length / 2) - 1}
              aria-label="Next courses"
            >
              <IoArrowBack  className="w-6 h-6 text-white" />
            </button>
            </div>
          </div>
        </div> 
        </div>
     </div>
    </main>
  );
}

export default CourseSectionPage;
