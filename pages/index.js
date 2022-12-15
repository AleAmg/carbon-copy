import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import carbon from "./../public/image/carboncopy.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Otaku Store - Home</title>
        <meta name="Page to screen a component html" content="Proyect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.circle_container}>
          <div className={styles.circle}>
            <div className={styles.circle_child}>
              <span className={styles.span}></span>
              <span className={styles.span}></span>
              <span className={styles.span}></span>
              <span className={styles.span}></span>
              <span className={styles.span}></span>
            </div>
          </div>
          <div className={styles.circle}>{`</>`}</div>
        </div>
        <Image
          className={styles.image}
          src={carbon}
          width="184"
          height="75"
          alt="Logo of carbon copy"
          priority={true}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.text}></div>
        <div className={styles.row_container}>
          <span className={styles.row}></span>
          <span className={styles.row}></span>
          <span className={styles.row}></span>
        </div>
      </div>
    </>
  );
}
