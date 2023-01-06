
import Search from '../comp/search';
import styles from "../styles/Account.module.css";
import Image from "next/image";
const Account = () => {
    return (
      <div className={styles.container}>
        <Search />
        <Image
          src="/profile.png"
          alt="profile-image"
          width={100}
          height={99.61}
          className={styles.image}
        />
            <p className={styles.name}>Adekunle Godslove</p>
        <div className={styles.delivery}>
          <h3>Delivery Address</h3>
                <div className={styles.text}>
                <p>
                Flat 6, Castle Snow Hotels, Gidankwano, Minna, NIger State. zip -
                code : 214456
                </p>
          </div>
        </div>
        <div className={styles.history}>
          <h3>Purchase History</h3>
                <div className={styles.text}>
                <p>
                Flat 6, Castle Snow Hotels, Gidankwano, Minna, NIger State. zip -
                code : 214456
                </p>
          </div>
        </div>
      </div>
    );
}
 
export default Account;