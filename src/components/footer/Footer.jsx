import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        @2023 Jonathan. All rights reserved
      </div>
      <div>
        <div className={styles.social}>
          <Image
            className={styles.icon}
            src="/1.png"
            width={15}
            height={15}
            alt="face"
          />
          <Image
            className={styles.icon}
            src="/2.png"
            width={15}
            height={15}
            alt="insta"
          />
          <Image
            className={styles.icon}
            src="/3.png"
            width={15}
            height={15}
            alt="twitt"
          />
          <Image
            className={styles.icon}
            src="/4.png"
            width={15}
            height={15}
            alt="you"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
