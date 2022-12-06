import PageLayout from "../components/PageLayout";
import style from "./../styles/SingUp.module.css";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import useInput from "../hook/useInput";
import Link from "next/link";

export default function LogIn() {
  const email = useInput("mail");
  const password = useInput("password");

  return (
    <PageLayout title="Carbon copy - Log In">
      <div className={style.page}>
        <h4 className={style.page_element}>o o o</h4>
        <h3 className={style.page_element}>Log In</h3>
      </div>
      <div className={style.container_form}>
        <div className={style.data}>
          <p>
            <span className={style.let}>let</span> user = {"{"}
          </p>
          <p>
            email: <span className={style.data_user}>"{email.value}"</span>
          </p>
          <p>
            password: <span className={style.data_user}>"********"</span>
            {"}"}
          </p>
        </div>
        <form className={style.form} /* onSubmit={handleSubmit} */>
          <div className={style.container_input}>
            <span className={style.span}>
              <AiOutlineMail />
            </span>
            <input
              className={style.input}
              type="email"
              required
              placeholder="Email"
              name={email.name}
              value={email.value}
              onChange={email.handleChange}
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
              name={password.name}
              value={password.value}
              onChange={password.handleChange}
            ></input>
          </div>
          <button className={style.button_login} type="submit">
            LOG IN
          </button>
        </form>
        <h5 className={style.isRegister}>
          Don't Have an Account??{" "}
          <Link href="/singup" className={style.link}>
            Sign up
          </Link>
        </h5>
      </div>
    </PageLayout>
  );
}
