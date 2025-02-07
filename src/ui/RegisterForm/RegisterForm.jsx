import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../RegisterForm/Styles.module.scss";

const RegisterForm = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const verifyCodeRef = useRef();

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const [isError, setIsError] = useState(false);

  const proverka = () => {
    setIsError(!isError);
  };

  const submitForm = () => {
    if (isValid) {
      // api code verification
      return navigate("/");
    }
    try {
      // api register validation
      // api code send
      // setIsValid(true)
    } catch (err) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        {!isValid ? (
          <>
            <input
              type="text"
              ref={nameRef}
              placeholder="Имя"
              required
              className={isError ? styles.error : null}
            />
            {isError && <label>текст ошибки</label>}
            <input
              type="text"
              ref={surnameRef}
              placeholder="Фамилия"
              required
              className={isError ? styles.error : null}
            />
            {isError && <label>текст ошибки</label>}
            <input
              type="email"
              ref={emailRef}
              placeholder="Почта"
              required
              className={isError ? styles.error : null}
            />
            {isError && <label>текст ошибки</label>}
            <input
              type="password"
              ref={passwordRef}
              placeholder="Пароль"
              required
              className={isError ? styles.error : null}
            />
            {isError && <label>текст ошибки</label>}
            <input
              type="password"
              ref={confirmPasswordRef}
              placeholder="Подтверждение пароля"
              required
              className={isError ? styles.error : null}
            />
            {isError && <label>текст ошибки</label>}
          </>
        ) : (
          <input type="text" ref={verifyCodeRef} required />
        )}
        <button type="submit">
          {!isValid ? "Регистрация" : "Подтвердить"}
        </button>
      </form>
      <button onClick={() => proverka()}>proverka</button>
    </>
  );
};

export default RegisterForm;
