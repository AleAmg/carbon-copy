import PageLayout from "../components/PageLayout";
import style from "./../styles/SingUp.module.css";

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
            user: <span className={style.data_user}>"AMG"</span>
          </p>
          <p>
            email: <span className={style.data_user}>"amg@gmail.com"</span>
          </p>
          <p>
            password: <span className={style.data_user}>"********"</span>
            {"}"}
          </p>
        </div>
        <form className={style.form}>
          <div className={style.container_input}>
            <span className={style.span}></span>
            <input
              className={style.input}
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className={style.container_input}>
            <span className={style.span}></span>
            <input
              className={style.input}
              type="email"
              placeholder="Mail"
            ></input>
          </div>
          <div className={style.container_input}>
            <span className={style.span}></span>
            <input
              className={style.input}
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <button className={style.button}>SING UP</button>
        </form>
      </div>
    </PageLayout>
  );
}
