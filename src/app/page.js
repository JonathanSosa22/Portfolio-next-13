import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/photo-desktop.png";
import Button from "@component/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Front-End <br></br> Development
        </h1>
        <p className={styles.desc}>
          Me especializo en React Js para el desarrollo de aplicaciones web
          completamente responsive y que se ajusten a tus necesidades como
          cliente.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
