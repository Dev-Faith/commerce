import Search from "../comp/search";
import { useState } from "react";
import styles from "../styles/Shop.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Items } from '../.next/static/chunks/pages/_app';

const Shop = () => {
  const [query, setQuery] = useState("");
  const cloths = [
    {
      name: "Abaya",
      price: "$99.90",
      id: 1,
    },
    {
      name: "Jalabiya",
      price: "$99.90",
      id: 2,
    },
    {
      name: "Jeans",
      price: "$100.90",
      id: 3,
    },
    {
      name: "Shirts",
      price: "$54.90",
      id: 4,
    },
    {
      name: "Baggi",
      price: "$89.90",
      id: 5,
    },
    {
      name: "Sweater",
      price: "$99.90",
      id: 6,
    }
  ];

  const filtered = cloths.filter(cloth => cloth.name.toLowerCase().includes(query));
  return (
    <motion.div className={styles.shop} layout>
      <Search query={query} setQuery={setQuery}/>
      <motion.div className={styles.items} layout>
        {
            filtered.map((cloth) => (
              <motion.div key={cloth.id} className={styles.item} layout>
                <Image src={`/item${cloth.id}.png`} alt="item-image" height={99} width={102} />
                <p>{cloth.name} | {cloth.price}</p>
              </motion.div>
            ))
          }
      </motion.div>
    </motion.div>
  );
};

export default Shop;
