"use client"
import React, { createContext, useContext } from 'react';
import '../styles/globals.css';
import '../styles/fonts.css';
import Head from 'next/head';
import Script from 'next/script';


export const MyContext = createContext();

export default function RootLayout({ children }) {
  return (
    <>
    <Script
                src="bundle.js" // Replace with your script URL
                strategy="lazyOnload" // Load the script after the page has loaded
            />
       <html className='font-custom' dir='rtl'>
       <body >
    {children}
    </body>
    </html>
    </>
  
  )
}
