import Image from "next/image";
import { useState } from "react";
import { BsTextRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Home from '../pages/home';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
      <div className="navbar">
        <div className="logo">
          <Image src="/logo.svg" alt="logo" height={27} width={93} />
        </div>
        <div className="bugger" onClick={() => setMenu(!menu)}>
          {!menu ? <RxCross1 /> : <BsTextRight />}
        </div>
        <div className={!menu ? "menu off" : "menu"}>
          <div className="menu-list">
            <ul>
              <li className="active">Home</li>
              <li>Shop</li>
              <li>Cart</li>
              <li>Account</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Navbar;