import Head from 'next/head';
import React from 'react';

const PageHead = () => (
  <Head>    
    <title>page title here</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="stylesheet preload"
      href="/fonts/Montserrat/Montserrat-Regular.ttf"
      as="style"
      crossOrigin="anonymous"
    />
     <link
      rel="stylesheet preload"
      href="/fonts/Montserrat/Montserrat-Medium.ttf"
      as="style"
      crossOrigin="anonymous"
    />
  </Head>
);

export default PageHead;