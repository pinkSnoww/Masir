"use client"
import React, { createContext, useContext } from 'react';
import '../public/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';


export const MyContext = createContext();

export default function RootLayout({ children }) {
  return (
    <>
    {/* <Script
                src="bundle.js"
                strategy="lazyOnload"
            /> */}
       <html className='font-custom' dir='rtl'>
       <body >
    {children}
    </body>
    </html>
    </>
  
  )
}
