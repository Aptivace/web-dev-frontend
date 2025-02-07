import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEyeSlash, FaEye } from "react-icons/fa";
import styles from "./Styles.module.scss";

const LoginForm = () => {
  const passwordRef = useRef();
  const emailRef = useRef();

  const verifyCodeRef = useRef();

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const [passCheck, setPassCheck] = useState({
    check: false,
    type: "password",
  });

  const submitForm = () => {
    if (isValid) {
      // api code verification
      return navigate("/");
    }
    try {
      // api login credentials validation
      // code send
      // setIsValid(true)
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.login_form}>
      {!isValid ? (
        <>
          <input
            type="email"
            placeholder="Почта"
            required
            className={isError ? styles.error : null}
          />
          {isError && <label>текст ошибки</label>}
          <input
            type="password"
            placeholder="Пароль"
            required
            className={isError ? styles.error : null}
          />
          {isError && <label>текст ошибки</label>}
        </>
      ) : (
        <input type="text" ref={verifyCodeRef} placeholder="huy" />
      )}
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
