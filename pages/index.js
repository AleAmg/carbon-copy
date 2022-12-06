import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <PageLayout title="Carbon copy - Home">
      <div className={styles.container}>
        Home
      </div>
    </PageLayout>
  );
}
