"use client"
import React, { useState } from 'react';
import Image from 'next/image';
const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };

  return (
    <main className="flex flex-col justify-center">
      <section className="flex overflow-hidden flex-wrap justify-between items-center py-8 w-full  max-md:max-w-full">
        <form onSubmit={handleSubmit} className="flex w-full justify-between items-center">
          <button
            type="submit"
            className="flex gap-2 justify-center items-center self-stretch px-4 my-auto w-16 h-16 bg-gray-800 rounded-[40px]"
            aria-label="Subscribe"
          >
            <Image
              src="/Images/submit.png"
              alt=""
              width={24}
              height={24}
              className="object-contain self-stretch my-auto w-8 aspect-square"
              aria-hidden="true"
            />
          </button>
          <div className="flex flex-col text-left justify-end items-end ">
            <div className="self-stretch my-auto text-6xl text-right text-gray-700 border-b border-solid border-b-gray-700 max-md:max-w-full max-md:text-4xl">
              <label htmlFor="emailInput" className="sr-only">Enter your email</label>
              <input
                type="email"
                id="emailInput"
                value={email}
                onChange={handleEmailChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border-none text-6xl text-left text-gray-700 max-md:max-w-full max-md:text-4xl"
                aria-label="Enter your email"
                required
              />
            </div>
            <p className="mt-6 text-xl font-extralight text-right text-slate-400 max-md:max-w-full">
              از جدیدترین دوره‌ها و محتوای آموزشی زودتر از همه باخبر شوید!
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EmailSubscription;