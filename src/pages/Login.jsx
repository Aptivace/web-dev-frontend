import React from "react";
import LoginForm from "../ui/LoginForm/LoginForm";
import styles from "./Styles.module.css";

const Login = () => {
  return (
    <div className={styles.auth_container}>
      <LoginForm />
      <img src="/images/cubicBackground.webp" alt="" />
    </div>
  );
};

export default Login;
