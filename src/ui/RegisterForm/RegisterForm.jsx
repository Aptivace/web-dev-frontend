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

  const submitForm = () => {
    if (isValid) {
      // api code verification
      return navigate("/");
    }
    try {
      // api register validation
      // api code send
      // setIsValid(true)
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm();
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        {!isValid ? (
          <>
            <div className={styles.field}>
              <input type="text" ref={nameRef} placeholder="Имя" required />
            </div>
            <div className={styles.field}>
              <input type="text" ref={surnameRef} placeholder="Фамилия" />
            </div>
            <div className={styles.field}>
              <input type="text" ref={emailRef} placeholder="Почта" />
            </div>
            <div className={styles.field}>
              <input type="password" ref={passwordRef} placeholder="Пароль" />
            </div>
            <div className={styles.field}>
              <input
                type="password"
                ref={confirmPasswordRef}
                placeholder="Подтверждение пароля"
              />
            </div>
          </>
        ) : (
          <div className={styles.field}>
            <input type="text" ref={verifyCodeRef} />
          </div>
        )}
        <button type="submit">
          {!isValid ? "Зарегистрироваться" : "Подтвердить"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
