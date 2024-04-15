import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.span}>BLOG</span> DEV
        </h1>
        <h2 className={styles.subTitle}>
          Exploring the Best Apps to Learn Web Development: A Comprehensive
          Guide
        </h2>
        <Link className={styles.btn} href={"/apps-to-learn-web-development"}>
          Learn More
        </Link>
      </div>
    </main>
  );
}
