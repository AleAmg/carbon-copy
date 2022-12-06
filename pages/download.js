import PageLayout from "../components/PageLayout";
import styles from "../styles/Download.module.css";

export default function Download() {
  return (
    <PageLayout title="Carbon copy - Download">
      <div className={styles.container}>
        <div suppressContentEditableWarning={true} contentEditable className={styles.fakeTextarea}>hola</div>
      </div>
    </PageLayout>
  );
}
