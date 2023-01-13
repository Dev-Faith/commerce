
import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";
import { useState } from 'react';

const Layout = ({ children }) => {
    return (
      <>
        <Head>
          <title>E-commerce</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
            rel="stylesheet"
          />
            </Head>
            
        <div class="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </>
    );
}
 
export default Layout;