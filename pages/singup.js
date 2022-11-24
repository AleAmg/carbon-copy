import PageLayout from "../components/PageLayout";
import style from "./../styles/SingUp.module.css";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

export default function SingUp() {
  return (
    <PageLayout title="Carbon copy - Sing Up">
      <div className={style.page}>
        <h4 className={style.page_element}>o o o</h4>
        <h3 className={style.page_element}>Sing up</h3>
      </div>
      <div className={style.container_form}>
        <div className={style.data}>
          <p>
            <span className={style.let}>let</span> user = {"{"}
          </p>
          <p>
            userName: <span className={style.data_user}>"Alexis"</span>
          </p>
          <p>
            email:{" "}
            <span className={style.data_user}>"alexisgiozza@gmail.com"</span>
          </p>
          <p>
            password: <span className={style.data_user}>"********"</span>
            {"}"}
          </p>
        </div>
        <form className={style.form}>
          <div className={style.container_input}>
            <span className={style.span}>
              <BsPerson />
            </span>
            <input
              className={style.input}
              type="text"
              placeholder="Username"
              defaultValue="Alexis"
              required
            ></input>
          </div>
          <div className={style.container_input}>
            <span className={style.span}>
              <AiOutlineMail />
            </span>
            <input
              className={style.input}
              type="email"
              required
              placeholder="Mail"
              defaultValue="alexisgiozza@gmail.com"
            ></input>
          </div>
          <div className={style.container_input}>
            <span className={style.span}>
              <AiOutlineUnlock />
            </span>
            <input
              className={style.input}
              type="password"
              placeholder="Password"
              required
            ></input>
          </div>
          <button className={style.button} type="submit">
            SING UP
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
