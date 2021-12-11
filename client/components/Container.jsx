// React imports
import React from 'react';
// Head tag import for Next
import Head from 'next/head';
// Nabar import from components
import Navbar from './Navbar';

// ContainerBlock function from containing other components
// for SEO
// for elements that exists on every page eg:-Navbar, Footer
export default function ContainerBlock({ children }) {
  // JSX for ContainerBlock
  return (
    <>
      {/* head element */}
      <Head>
        <title>OPenEd</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* contain all other components */}
      <main className="bg-gray-50 dark:bg-black w-full min-h-screen">
        <Navbar />
        {/* contain child element */}
        {children}
      </main>
    </>
  );
}
