import PageLayout from "../components/PageLayout";
import style from "./../styles/SingUp.module.css";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import useInput from "../hook/useInput";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const GetStaticProps = async (email, password) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
    {
      mail: email,
      password,
    }
  );
  if (res.data.token) {
    localStorage.setItem("tokenLogin", JSON.stringify(res.data.token));
    localStorage.setItem("name", JSON.stringify(res.data.name));
  }
  console.log(res.data);
};

const removeLocalStorage = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("tokenLogin");
};

export default function LogIn() {
  const email = useInput("mail");
  const password = useInput("password");
  const [token, setToken] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    GetStaticProps(email.value, password.value);
    router.push("/download");
  };

  const logOut = (e) => {
    e.preventDefault();
    removeLocalStorage();
    router.push("/");
  };

  useEffect(() => {
    const tokenSL = JSON.parse(localStorage.getItem("tokenLogin"));
    setToken(tokenSL);
  }, []);

  return (
    <PageLayout title="Carbon copy - Log In">
      <div className={style.page}>
        <h4 className={style.page_element}>o o o</h4>
        <h3 className={style.page_element}>Log In</h3>
      </div>
      <div className={style.container_form}>
        {token ? (
          <div className={style.button_logout_container}>
            <button className={style.button_logout} onClick={logOut}>
              LOG OUT
            </button>
          </div>
        ) : (
          <>
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
            <form className={style.form} onSubmit={handleSubmit}>
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
          </>
        )}
      </div>
    </PageLayout>
  );
}
