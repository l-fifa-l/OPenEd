// React imports
import React from 'react';
// Head tag import for Next
import Head from 'next/head';
// Nabar import from components
import Navbar from './Navbar';
// Footer import from components
import Footer from './Footer';

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
      <main className="bg-white dark:bg-gray-800 w-full">
        <Navbar />
        {/* contain child element */}
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
}
