import Image from "next/image";
import { useState } from "react";
import { BsTextRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Home from '../pages/home';
import { motion, spring } from "framer-motion";
const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
      <div className="navbar">
        <div className="logo">
          <Image src="/logo.svg" alt="logo" height={27} width={93} />
        </div>
        <div  className="bugger" onClick={() => setMenu(!menu)}>
          {!menu ? <BsTextRight /> : <RxCross1 />}
        </div>
        <motion.div
          className={!menu ? "menu off" : "menu"}
          transition={{
            layout: { duration: 1, type: "spring" },
          }}
          layout
        >
          <div
            className="menu-list">
            <ul>
              <li className="active">Home</li>
              <li>Shop</li>
              <li>Cart</li>
              <li>Account</li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
}

export default Navbar;