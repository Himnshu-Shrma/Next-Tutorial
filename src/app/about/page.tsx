import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.subtitle}>About Next</h1>
        <h2 className={styles.title}>Stay Updated with latest version</h2>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident enim consequuntur, reprehenderit unde quaerat magnam rerum veniam beatae assumenda architecto dolores dolore dicta doloribus iusto repellendus fuga delectus corrupti!</p>

        <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>
                  10 K+
              </h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>
                  10 K+
              </h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>
                  10 K+
              </h1>
              <p>Year of experience</p>
            </div>

        </div>
      </div>


      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Page Image" fill />
      </div>
    </div>
  );
};

export default AboutPage;
