import Head from "next/head";
import carbon from "./../public/image/carboncopy.svg";
import Image from "next/image";
import style from "./../styles/PageLayout.module.css";
import Link from "next/link";
import { BsSun, BsPerson, BsHeart } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";

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
          <nav className={style.navbar}>
            <Link className={style.link} href="/download">
              <TfiDownload />
            </Link>
            <Link className={style.link} href="/">
              <BsHeart />
            </Link>
            <Link className={style.link} href="/login">
              <BsPerson />
            </Link>
            <Link className={style.link} href="/">
              <BsSun />
            </Link>
          </nav>
          <Image
            className={style.image}
            src={carbon}
            width="200"
            height="90"
            alt="Logo of carbon copy"
            priority={true}
          />
          <h2 className={style.text}>Give style to your code</h2>
          {children}
        </div>
      </main>
    </>
  );
}
