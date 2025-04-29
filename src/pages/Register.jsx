import React from "react";
import RegisterForm from "../ui/RegisterForm/RegisterForm";
import styles from "./Styles.module.css";

const Register = () => {
  return (
    <div className={styles.auth_container}>
      <RegisterForm />
      <img src="/images/cubicBackground.webp" alt="" />
    </div>
  );
};

export default Register;
