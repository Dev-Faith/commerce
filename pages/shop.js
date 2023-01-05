import Search from "../comp/search";
import styles from "../styles/Shop.module.css";
import Image from "next/image";
// import { Items } from '../.next/static/chunks/pages/_app';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Search />
      <div className={styles.items}>
        <div className={styles.item}>
          <Image src="/item1.png" alt="item-image" height={99} width={102} />
          <p>Abaya | $99.9</p>
        </div>
        <div className={styles.item}>
          <Image src="/item2.png" alt="item-image" height={99} width={102} />
          <p>Jalabiya | $94.9</p>
        </div>
        <div className={styles.item}>
          <Image src="/item3.png" alt="item-image" height={99} width={102} />
          <p>Jeans | $100.9</p>
        </div>
        <div className={styles.item}>
          <Image src="/item4.png" alt="item-image" height={99} width={102} />
          <p>Shirts | $54.9</p>
        </div>
        <div className={styles.item}>
          <Image src="/item5.png" alt="item-image" height={99} width={102} />
          <p>Baggi | $89.9</p>
        </div>
        <div className={styles.item}>
          <Image src="/item6.png" alt="item-image" height={99} width={102} />
          <p>Sweater | $99.9</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
