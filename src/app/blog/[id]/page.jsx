import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            suscipit, autem sapiente voluptatum ipsum est? Quae possimus sit
            fugit deleniti, quisquam delectus totam repellat? Exercitationem
            quidem quam assumenda temporibus repellendus.
          </p>
          <div className={styles.author}>
            <Image
              src="/1.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/apps.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae
          excepturi quod adipisci? Ipsum est, sequi quis omnis illo quasi,
          consequuntur nihil maiores quod praesentium modi magnam maxime
          temporibus iste?
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          suscipit ipsa maxime est soluta eum adipisci earum pariatur commodi
          modi perspiciatis quasi itaque sit, quae rem error necessitatibus et
          ducimus.
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem,
          alias minima eum labore incidunt saepe aliquam recusandae doloribus
          facere error deserunt dolor eligendi earum, placeat harum modi.
          Facilis, sequi?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
