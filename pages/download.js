import PageLayout from "../components/PageLayout";
import styles from "../styles/Download.module.css";
import html2canvas from "html2canvas";
import { useEffect } from "react";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Download() {
  const exportPNG = () => {
    const input = document.getElementById("App-png");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canva) => {
      let enlace = document.createElement("a");
      enlace.download = "download.png";
      enlace.href = canva.toDataURL("image/png");
      enlace.click();
    });
  };
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <PageLayout title="Carbon copy - Download">
      <div className={styles.container} id="App-png">
        <pre>
          <code className="language-javascript">
           let arr = [1,2,3]
          </code>
        </pre>
      </div>

      <button onClick={() => exportPNG()}>xxx</button>
    </PageLayout>
  );
}

/*  <div
              suppressContentEditableWarning={true}
              contentEditable
              spellCheck={false}
              className={styles.fakeTextarea}
            >
              {`let arr = [1,2,3,4,5]`}
              <br></br>
              {`function double(array){`}
              <br></br>
              {`
          array.map((number)=>{`}
              <br></br>
              {`
            return number *2`}
              <br></br>
              {`
          })`}
              <br></br>
              {`
          }`}
            </div> */