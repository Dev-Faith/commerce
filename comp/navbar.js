import Image from "next/image";
import { useState,useEffect } from "react";
import { BsTextRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { motion, spring } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/logo.svg" alt="logo" height={27} width={93} />
      </div>
      <div className="bugger" onClick={() => setMenu(!menu)}>
        {!menu ? <BsTextRight /> : <RxCross1 />}
      </div>
      <motion.div
        className={!menu ? "menu off" : "menu"}
        transition={{
          layout: { duration: 0.3, type: "spring" },
        }}
        layout
      >
        <div className="menu-list">
          <ul>
            <li
              className={active === 1 ? "first active" : ""}
              onClick={() => setActive(1)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={active === 2 ? "second active" : ""}
              onClick={() => setActive(2)}
            >
              <Link href="/shop">Shop</Link>
            </li>
            <li
              className={active === 3 ? "third active" : ""}
              onClick={() => setActive(3)}
            >
              <Link href="/cart">Cart</Link>
            </li>
            <li className={active === 4 ? "fourth active":""} onClick={() => setActive(4)}>
              <Link href="/account">Account</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
