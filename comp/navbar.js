import Image from "next/image";
import { useState,useEffect } from "react";
import { BsTextRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { motion, spring } from "framer-motion";
import Link from "next/link";
const Navbar = ({offScreen, setOffScreen}) => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="logo"
            height={27}
            width={93}
            className="logo-image"
          />
        </div>
        <div className="desktop-navbar">
          <ul>
            <li
              id="menu"
              className={active === 1 ? "first active" : ""}
              onClick={() => setActive(1)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              id="menu"
              className={active === 2 ? "second active" : ""}
              onClick={() => setActive(2)}
            >
              <Link href="/shop">Shop</Link>
            </li>
            <li
              id="menu"
              className={active === 3 ? "third active" : ""}
              onClick={() => setActive(3)}
            >
              <Link href="/cart">Cart</Link>
            </li>
            <li
              id="menu"
              className={active === 4 ? "fourth active" : ""}
              onClick={() => setActive(4)}
            >
              <Link href="/account">Account</Link>
            </li>
          </ul>
        </div>
        <div className="bugger" onClick={() => setOffScreen(!offScreen)}>
          {!offScreen ? <BsTextRight /> : <RxCross1 />}
        </div>
        <motion.div id ="menu"
          className={!offScreen ? "menu off" : "menu"}
          transition={{
            layout: { duration: 0.3, type: "spring" },
          }}
          layout
        >
          <div className="menu-list">
            <ul>
              <li id = "menu"
                className={active === 1 ? "first active" : ""}
                onClick={() => setActive(1)}
              >
                <Link id = "menu" href="/">Home</Link>
              </li>
              <li
                  id="menu"
                className={active === 2 ? "second active" : ""}
                onClick={() => setActive(2)}
              >
                <Link  id = "menu" href="/shop">Shop</Link>
              </li>
              <li
              id="menu"
                className={active === 3 ? "third active" : ""}
                onClick={() => setActive(3)}
              >
                <Link id = "menu" href="/cart">Cart</Link>
              </li>
              <li
              id = "menu"
                className={active === 4 ? "fourth active" : ""}
                onClick={() => setActive(4)}
              >
                <Link  id = "menu" href="/account">Account</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
