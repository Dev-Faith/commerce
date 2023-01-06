import styles from "../styles/Cart.module.css";
import Search from "../comp/search";
import Image from "next/image";
import { AiOutlineMinus } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
const Cart = () => {
    return (
      <div className={styles.container}>
        <Search />
        <div className={styles.carts}>
          <div className={styles.cart}>
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
          </div>
        </div>
      </div>
    );
        
};
 
export default Cart;