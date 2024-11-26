"use client"
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import './BlogCard.css';
import { motion, AnimatePresence } from 'framer-motion';
import PageIndicator from './PageIndicator';
import NavigationArrow from './NavigationArrow';

const blogPosts = [
  {
    id: 1,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "۵ تکنیک کلیدی برای موفقیت در بازاریابی دیجیتال",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 2,
    image: "/Images/Blog1.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 3,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 4,
    image: "/Images/Blog1.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 5,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 6,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 7,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 8,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  },
  {
    id: 9,
    image: "/Images/Blog.png",
    tag: "برنامه‌نویسی",
    title: "چگونه مسیر شغلی خود را با یادگیری آنلاین تغییر دهید؟",
    description: "یادگیری آنلاین به یکی از بهترین راه‌ها برای تغییر و پیشرفت در مسیر شغلی تبدیل شده است."
  }
];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState(0); // Initialize with the first blog post index

  const navigateTab = (direction) => {
    const newIndex = direction === 'next' ? (activeTab + 1) : (activeTab - 1);
    if (newIndex >= 0 && newIndex <= blogPosts.length - 1) {
      setActiveTab(newIndex);
    }
  };

  return (
    <main className="flex flex-col mb-20 w-full mt-32 max-md:px-5">
      <div className="flex flex-wrap  justify-between mx-[64px] mb-10 items-end max-md:max-w-full">
        <h1 className="text-5xl font-medium text-right text-gray-800 leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[65px]">
          مطالب آموزشی <br />و راهنمایی‌های کاربردی
        </h1>
        <h2 className="text-3xl font-light text-slate-500 max-md:max-w-full">
          جدیدترین مقالات و راهکارها برای موفقیت <br /> در مسیر حرفه‌ای و رشد کسب‌وکار
        </h2>
      </div>

      <div className='blog-cards-container'>
        <AnimatePresence>
          <motion.div
            className="flex gap-5" // Use flex to display cards in a row
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 10, x: 0 }} // Slide in
            exit={{ opacity: 0, x: -100 }} // Slide out to the left
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x" // Enable horizontal dragging
            dragConstraints={{ left: -200, right: 0 }} // Set drag constraints
            onDragEnd={(event, info) => {
              if (info.offset.x > 50) {
                navigateTab('next'); // Navigate to previous if dragged right
              } else if (info.offset.x < -50) {
                navigateTab('prev'); // Navigate to next if dragged left
              }
            }}
          >
            {blogPosts.slice(activeTab, activeTab + 4).map((post) => (
              <BlogCard {...post} key={post.id} />
            ))}
            {/* {activeTab + 3 < blogPosts.length && (
              <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full text-center text-xl font-bold">+</div>
            )} */}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='flex justify-between items-center'>
      <PageIndicator activeTab={activeTab} totalTabs={Math.min(5, blogPosts.length)} />
      <NavigationArrow onClick={navigateTab} label={activeTab === blogPosts.length - 1 ? 'Previous' : 'Next'} />
      </div>
    </main>
  );
}

export default BlogSection;