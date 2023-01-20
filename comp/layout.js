
import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";
import { useState } from 'react';

const Layout = ({ children }) => {
  const [offScreen, setOffScreen] = useState(false);
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

        <div
          class="container"
          onClick={(e) => {
            if (e.target.id !== "menu") {
              if (offScreen === true) {
                setOffScreen(!offScreen);
              }
            }
          }}
        >
          <Navbar offScreen={offScreen} setOffScreen={setOffScreen} />
          {children}
          <Footer />
        </div>
      </>
    );
}
 
export default Layout;