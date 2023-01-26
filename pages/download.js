import PageLayout from "../components/PageLayout";
import styles from "../styles/Download.module.css";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import useInput from "../hook/useInput";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Download() {
  const text = useInput("text", `let arr = [1,2,3,4,5]`);
  const [language, setLenguage] = useState("javascript");
  const [color, setColor] = useState("#ffb800");
  const exportPNG = () => {
    const input = document.getElementById("App-png");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canva) => {
      let enlace = document.createElement("a");
      enlace.download = "carbo-copy.png";
      enlace.href = canva.toDataURL("image/png");
      enlace.click();
    });
  };
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [text.value]);

  const style = {
    background: color,
  };

  return (
    <PageLayout title="Carbon copy - Download">
      <div className={styles.container_inputs}>
        <div className={styles.container_select}>
          <select
            className={styles.select}
            onChange={(e) => setLenguage(e.target.value)}
          >
            <option selected>javascript</option>
            <option>css</option>
            <option>html</option>
          </select>
          <i></i>
        </div>
        <div className={styles.container_inputColor}>
          <input
            className={styles.inputColor}
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          ></input>
          <p>{color}</p>
        </div>
      </div>
      <div className={styles.container} id="App-png" style={style}>
        <pre className={styles.fakeTextarea} id="code">
          <code className={`language-${language}`} id="codi">
            {text.value}
          </code>
        </pre>
        <textarea
          className={styles.textarea}
          name={text.name}
          value={text.value}
          onChange={text.handleChange}
          spellCheck="false"
        ></textarea>
      </div>
      <div className={styles.container_button}>
        <button className={styles.button} onClick={() => exportPNG()}>
          DOWNLOAD
        </button>
      </div>
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

/* let str = "  some /hola/ sla  sheholas ho la  /hola/";
let replaced = str.replaceAll("  ", " ");
console.log(replaced); */
