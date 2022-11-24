import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <PageLayout title="Carbon copy - Home">
      <div className={styles.container}>
        <Link href={"/singup"}>Sing up</Link>
        <h1>Home</h1>
      </div>
    </PageLayout>
  );
}
