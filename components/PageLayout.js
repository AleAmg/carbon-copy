import Head from "next/head";
import carbon from "./../public/carbon copy.svg";
import Image from "next/image";
import style from "./../styles/PageLayout.module.css";

export default function PageLayout({ children, title = "Otaku Store" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Page to screen a component html" content="Proyect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={style.container}>
          <Image
            className={style.image}
            src={carbon}
            width="184"
            height="74"
          ></Image>
          <h2 className={style.text}>Give style to your code</h2>
          {children}
        </div>
      </main>
    </>
  );
}
