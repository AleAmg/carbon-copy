import PageLayout from "../components/PageLayout";
import style from "./../styles/SingUp.module.css";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import useInput from "../hook/useInput";

import axios from "axios";
import { useRouter } from "next/router";

const register = async (name, email, password) => {
  await axios.post("http://localhost:3001/api/user/singin", {
    name,
    mail: email,
    password,
  });
};

export default function SingUp() {
  const name = useInput("name");
  const email = useInput("mail");
  const password = useInput("password");
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name.value, email.value, password.value);
    router.push("/")
  };

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
            userName: <span className={style.data_user}>"{name.value}"</span>
          </p>
          <p>
            email: <span className={style.data_user}>"{email.value}"</span>
          </p>
          <p>
            password: <span className={style.data_user}>"********"</span>
            {"}"}
          </p>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.container_input}>
            <span className={style.span}>
              <BsPerson />
            </span>
            <input
              className={style.input}
              type="text"
              placeholder="Username"
              required
              name={name.name}
              value={name.value}
              onChange={name.handleChange}
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
          <button className={style.button} type="submit">
            SING UP
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
