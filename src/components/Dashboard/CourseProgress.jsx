"use client";
import React, { useState, useEffect, useMemo } from "react";
import CircularProgressBar from "./CircularProgressBar";
import { CircularProgress } from "@nextui-org/react";
import Image from 'next/image';

const CourseProgress = () => {
  const [value, setValue] = useState(0);

  const courses = useMemo(() => {
    return [
      {
        title: "دوره طراحی گرافیک",
        instructor: "مریم احمدی",
        progress: "90",
        videoHours: "23 ساعت",
      },
      {
        title: "دوره برنامه‌نویسی",
        instructor: "علی کریمی",
        progress: "20",
        videoHours: "23 ساعت",
      },
      {
        title: "دوره طراحی گرافیک",
        instructor: "مریم احمدی",
        progress: "40",
        videoHours: "23 ساعت",
      },
    ];
  }, []);

  useEffect(() => {
    const handleIncrement = (progress) => {
      if (progress >= 100) {
        return 100; // Cap at 100%
      }
      return progress + 10; // Increment by 10
    };

    // Set initial value based on the first course's progress
    setValue(courses[0].progress);

    const interval = setInterval(() => {
      setValue((prev) => handleIncrement(prev));
    }, 2000);

    return () => clearInterval(interval);
  }, [courses]);

  return (
    <section className="flex overflow-hidden flex-col grow shrink self-start p-5 bg-white min-w-[240px] rounded-[32px] w-[646px] max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center w-full min-h-[48px] max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2 self-stretch my-auto text-2xl font-light text-right text-gray-800 basis-6 min-w-[240px] max-md:max-w-full">
          دوره‌های جاری و پیشرفت
        </h2>
        <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 bg-neutral-100 rounded-[32px]">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff165252fa6249989c95fc385d94cc6d376d4bd53e9a4298410edd5eb8813d9a?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc"
            alt=""
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col p-5 w-full rounded-2xl bg-zinc-100 max-md:max-w-full">
          <div className="flex flex-wrap gap-2 justify-center items-center w-full max-md:max-w-full">
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-2xl font-light text-right text-gray-700 whitespace-nowrap min-w-[240px] max-md:max-w-full">
              پیشرفت
            </div>
            <div className="flex gap-2 items-center self-stretch my-auto">
              <div className="self-stretch my-auto text-2xl text-right text-gray-700 font-[279]">
                10%+
              </div>
              <div className="flex gap-2 justify-center items-center self-stretch px-1.5 my-auto w-8 h-8 bg-lime-400 rounded-[40px]">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7d2954f79b9c2519416f1892ce0be456fceac2d9198d2947de87448a6b3f1ad?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc"
                  alt=""
                  className="object-contain self-stretch my-auto w-5 rounded-3xl aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-start mt-10 w-full text-center max-md:max-w-full">
            <div className="flex items-start px-4  text-4xl whitespace-nowrap font-[383] min-w-[240px] text-neutral-700 w-[258px]">
              <div className="relative mx-auto h-32  w-48">
                <svg
                  className="rotate-180"
                  viewBox="-2 2 40 38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current  text-[#C3D6CE] dark:text-neutral-700"
                    strokeWidth="5"
                    strokeDasharray="50 100"
                    strokeLinecap="butt"
                    
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#527163" 
                    strokeWidth="5"
                    strokeDasharray="10 100" 
                    strokeLinecap="butt"
                 
                  ></circle>
                 
                </svg>
                <div className="m-auto start-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-2xl font-bold text-[#527163] dark:text-orange-500">
                    {value}%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 shrink justify-center basis-[30px] min-w-[240px]">
              <div className="flex overflow-hidden gap-10 justify-between items-center px-4 py-3 w-full whitespace-nowrap bg-white rounded-2xl">
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <div className="flex gap-0.5 items-end self-stretch my-auto">
                    <div className="text-xl text-gray-700">۱۲</div>
                    <div className="text-lg font-extralight text-gray-600">
                      /۴۸
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-base font-extralight text-gray-600">
                    قسمت
                  </div>
                </div>
                <div className="self-stretch my-auto text-lg text-gray-700">
                  دیدید!
                </div>
              </div>
              <div className="flex overflow-hidden gap-10 justify-between items-center px-4 py-3 mt-2 w-full bg-white rounded-2xl">
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <div className="flex gap-0.5 items-end self-stretch my-auto whitespace-nowrap">
                    <div className="text-xl text-gray-700">۸</div>
                    <div className="text-lg font-extralight text-gray-600">
                      /۲۸
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-base font-extralight text-gray-600">
                    تمرین تکمیل شده
                  </div>
                </div>
                <div className="self-stretch my-auto text-lg text-gray-700">
                  انجام دادید!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`flex overflow-hidden flex-wrap gap-4 p-2.5 ${
                index > 0 ? "mt-3" : ""
              } w-full rounded-2xl ${
                index === 0 ? "border border-solid border-neutral-400" : ""
              } max-md:max-w-full`}
            >
              <div className="flex overflow-hidden flex-col my-auto rounded-lg min-h-[68px] w-[68px]">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d523ba1be7edadfac92a14779cfd527b6b4490914c977f830e2babf26c9effb?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc"
                  alt=""
                  className="object-contain flex-1 aspect-square w-[68px]"
                />
              </div>

              <div className="flex flex-col flex-1 my-auto shrink justify-center py-0.5 text-right basis-4 min-w-[240px]">
                <div className="w-full text-lg font-light text-gray-700">
                  {course.title}
                </div>
                <div className="flex-1 shrink gap-1.5 self-stretch mt-1.5 w-full text-sm font-extralight text-slate-500">
                  {course.instructor}
                </div>
              </div>
              <div className="flex flex-col my-auto flex-1 shrink justify-center py-0.5 text-right basis-4 min-w-[240px]">
                <div className="w-full text-lg font-light text-gray-700">
                  {course.videoHours}
                </div>
                <div className="flex-1 shrink gap-1.5 self-stretch mt-1.5 w-full text-sm font-extralight text-slate-500">
                  آموزش ویدیویی
                </div>
              </div>
              <div
                className={`flex overflow-hidden relative flex-col justify-center items-center px-2 py-5 my-auto w-16 text-center whitespace-nowrap rounded-lg min-h-[64px] ${
                  index > 0 ? "text-slate-500" : ""
                }`}
              >
                <CircularProgress
                  aria-label="Loading..."
                  size="lg"
                  value={course.progress}
                  classNames={{
                    svg: "w-16 h-16 drop-shadow-md",
                    indicator: "bg-[#527163]",
                    track: "stroke-white/10",
                    value: "text-sm text-black",
                    radius: "r-16",
                  }}
                  strokeWidth={2}
                  showValueLabel={true}
                  valueLabel={
                    <div className="flex flex-col">
                      {course.progress}%
                      <div className="flex flex-col text-xs"> پیشرفت</div>
                    </div>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseProgress;
