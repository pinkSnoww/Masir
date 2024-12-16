"use client";
import * as React from "react";
import { NavigationLinks } from "./NavigationLinks";
import { PasswordInput } from "./PasswordInput";
import Link from "next/link";
import SignButton from "../../../src/components/Common/Button_Module"
export default function SignupForm() {
  const [isReturningUser, setIsReturningUser] = React.useState(false); // State to track user status
  const Dashboard = "/Dashboard";
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReturningUser(true);
    if (isReturningUser) {
      window.location.href = Dashboard; 
    }
  };

  return (
    <div
      className={`flex overflow-hidden flex-col h-screen ${
        isReturningUser ? "bg-returning-bg" : "bg-signup-bg"
      }`}
    >
      <div className="flex overflow-hidden relative flex-col flex-wrap gap-5 justify-between px-16 py-24 w-full h-full max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={
            isReturningUser
              ? "/Images/LoginBackgroundImage.png"
              : "/Images/BackgroundImageSignup.png"
          }
          alt="Background"
          className="object-cover absolute my-auto inset-0 w-full h-full min-h-screen"
        />
        <div className="flex relative flex-col max-md:max-w-full">
          <NavigationLinks />
        </div>
        <div className="flex z-10 max-w-full absolute bottom-16 left-8 w-[323px]">
          <img
            loading="lazy"
            src="/Images/VectorLogo.png"
            alt="Logo"
            className="object-contain w-full aspect-[5.78] fill-white"
          />
        </div>
        <div className="flex">
          <form
            onSubmit={handleSubmit}
            className="flex overflow-hidden relative flex-col justify-between p-6 w-[416px] bg-white min-h-[784px] rounded-[32px] max-md:px-5"
          >
            <div className="flex flex-col px-0.5 w-full text-center">
              <div className="gap-2 self-center px-3 py-2 text-base font-light leading-none text-gray-700 whitespace-nowrap rounded-lg bg-zinc-100">
                {isReturningUser ? "ورود" : "ثبت‌نام"}
              </div>
              <div className="flex flex-col mt-5 w-full">
                <h1 className="flex-1 shrink gap-2 self-stretch w-full text-2xl text-gray-800 min-h-[31px]">
                  خوش آمدید!
                </h1>
                <p className="flex-1 shrink gap-2 self-stretch mt-2 w-full text-base font-extralight text-slate-500">
                  {isReturningUser
                    ? "خوش آمدی! وارد شو و ادامه بده!"
                    : "ثبت‌نام کن و مهارت‌های جدید یاد بگیر!"}
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-12 w-full max-md:mt-10 ">
              {!isReturningUser && (
                <>
                  <div className="flex flex-col justify-center w-full text-base font-extralight text-right">
                    <label
                      htmlFor="fullName"
                      className="flex-1 shrink gap-2 self-stretch px-1 w-full text-gray-700"
                    >
                      نام و نام‌خانوادگی
                    </label>
                    <div className="flex gap-2.5 items-center px-2.5 py-5 mt-3 w-full rounded-2xl bg-neutral-100 min-h-[56px]">
                      <input
                        type="text"
                        id="fullName"
                        className="flex-1 shrink gap-2 self-stretch pr-3 my-auto w-full min-w-[240px] bg-transparent border-none outline-none text-neutral-300"
                        placeholder="نام کامل خود را وارد کنید"
                        aria-label="نام و نام‌خانوادگی"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center mt-4 w-full">
                    <label
                      htmlFor="email"
                      className="flex-1 shrink gap-2 self-stretch px-1 w-full text-base font-extralight text-right text-gray- 700"
                    >
                      ایمیل
                    </label>
                    <div className="flex gap-2.5 items-center px-2.5 py-2 mt-3 w-full rounded-2xl bg-neutral-100 min-h-[56px]">
                      <input
                        type="email"
                        id="email"
                        className="flex-1 shrink gap-2 text-left self-stretch my-auto text-base font-extralight bg-transparent border-none outline-none min-w-[240px] text-neutral-300"
                        placeholder="example@email.com"
                        aria-label="ایمیل"
                      />
                      <div className="flex gap-2 justify-center items-center self-stretch p-2 my-auto w-10">
                        <img
                          loading="lazy"
                          src="/Images/emailIcon.png"
                          alt="EmailIcon"
                          className="object-contain self-stretch my-auto w-6 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
          
              {isReturningUser && (
                <div className=" mt-24">
                  <label
                    htmlFor="email"
                    className="flex-1 shrink gap-2 self-stretch px-1 w-full text-base font-extralight text-right text-gray- 700"
                  >
                    ایمیل
                  </label>
                  <div className="flex gap-2.5 bg items-center px-2.5 py-2 mt-3 w-full rounded-2xl bg-neutral-100 min-h-[56px]">
                    <input
                      type="email"
                      id="email"
                      className="flex-1 shrink gap-2 text-left self-stretch my-auto text-base font-extralight bg-transparent border-none outline-none min-w-[240px] text-neutral-300"
                      placeholder="example@email.com"
                      aria-label="ایمیل"
                    />
                    <div className="flex gap-2 justify-center items-center self-stretch p-2 my-auto w-10">
                      <img
                        loading="lazy"
                        src="/Images/emailIcon.png"
                        alt="EmailIcon"
                        className="object-contain self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              )}

              <PasswordInput label="رمز عبور" showHint={false} />
              {!isReturningUser && (
                <PasswordInput label="تایید رمز عبور" showHint={true} />
              )}
            </div>
           
            <div className="flex flex-col justify-center mt-12 w-full max-md:mt-10">
            
            {isReturningUser && (  <div className="flex flex-col items-start mb-3 mt-12 w-full text-sm font-light text-right text-slate-500 max-md:mt-10">
                <button
                  type="button"
                  className=" gap-1 self-stretch w-full text-right  underline decoration-auto decoration-solid min-h-[18px] underline-offset-auto"
                >
                  فراموشی رمز عبور
                </button>
              </div>
              )}
            
             
                <SignButton isReturningUser ={true} isLoading={false} isDisabled={false} />          
          
              <div className="flex gap-1.5 items-center py-0.5 mt-3.5 w-full text-sm font-light text-right text-slate-500">
                <img
                  loading="lazy"
                  src="/Images/alert-circle.png"
                  alt="CheckIcon"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <div className="flex-1 shrink self-stretch my-auto basis-0">
                  با ثبت نام، شما شرایط و قوانین ما را می‌پذیرید.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
