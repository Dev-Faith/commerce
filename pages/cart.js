import styles from "../styles/Cart.module.css";
import Search from "../comp/search";
import Image from "next/image";
import { AiOutlineMinus } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { useState } from 'react';
import { motion } from 'framer-motion';
const Cart = () => {
    const [query, setQuery] = useState("");
    const carts = [
      {
        name: "Abaya",
        price: "$99.90",
            id: 1,
        count: 9
      },
      {
        name: "Jalabiya",
        price: "$99.90",
        id: 2,
        count: 3
      },
      {
        name: "Jeans",
        price: "$100.90",
        id: 3,
        count: 7
      },
      {
        name: "Shirts",
        price: "$54.90",
        id: 4,
        count: 2
      },
      {
        name: "Baggi",
        price: "$89.90",
        id: 5,
        count: 1
      },
      {
        name: "Sweater",
        price: "$99.90",
        id: 6,
        count: 12
      },
    ];

    const filtered = carts.filter((cart) => cart.name.toLowerCase().includes(query));
    return (
      <div className={styles.container}>
        <Search query={query} setQuery={setQuery} />
            <motion.div className={styles.carts} layout> 
                {
                    filtered.map((item) => (
                        <motion.div key={item.id} className={styles.cart} layout>
                            <Image src={`/item${item.id}.png`} alt="cart-image" width={88} height={74} />
                            <div className={styles.aside}>
                                <div className={styles.heading}>
                                    <p className={styles.headingText}>{item.name} | {item.price}</p>
                                    <div className={styles.circle}>{item.count}</div>
                                </div>
                                <div className={styles.determiners}>
                                    <AiOutlineMinus /> <p>|</p> <HiPlus />
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
          {/* <div className={styles.cart}>
                <Image src="/cart1.png" alt="cart-image" width={88} height={74} />
                <div className={styles.aside}>
                    <div className={styles.heading}>
                        <p className={styles.headingText}>Packing Shirts | $88.80</p>
                        <div className={styles.circle}>1</div>
                    </div>
                    <div className={styles.determiners}>
                        <AiOutlineMinus /> <p>|</p> <HiPlus />
                    </div>
                </div>
          </div>
          <div className={styles.cart}>
                <Image src="/cart2.png" alt="cart-image" width={88} height={74} />
                <div className={styles.aside}>
                    <div className={styles.heading}>
                        <p className={styles.headingText}>Packing Shirts | $88.80</p>
                        <div className={styles.circle}>1</div>
                    </div>
                    <div className={styles.determiners}>
                        <AiOutlineMinus /> <p>|</p> <HiPlus />
                    </div>
                </div>
          </div>
          <div className={styles.cart}>
                <Image src="/cart3.png" alt="cart-image" width={88} height={74} />
                <div className={styles.aside}>
                    <div className={styles.heading}>
                        <p className={styles.headingText}>Packing Shirts | $88.80</p>
                        <div className={styles.circle}>1</div>
                    </div>
                    <div className={styles.determiners}>
                        <AiOutlineMinus /> <p>|</p> <HiPlus />
                    </div>
                </div>
          </div>
          <div className={styles.cart}>
                <Image src="/cart4.png" alt="cart-image" width={88} height={74} />
                <div className={styles.aside}>
                    <div className={styles.heading}>
                        <p className={styles.headingText}>Packing Shirts | $88.80</p>
                        <div className={styles.circle}>1</div>
                    </div>
                    <div className={styles.determiners}>
                        <AiOutlineMinus /> <p>|</p> <HiPlus />
                    </div>
                </div>
          </div> */}
        </motion.div>
      </div>
    );
        
};
 
export default Cart;