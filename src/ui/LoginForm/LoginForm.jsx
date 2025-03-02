import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEyeSlash, FaEye } from "react-icons/fa";
import styles from "./Styles.module.scss";
import axios from "../../api/axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const verifyCodeRef = useRef();

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitForm = async () => {
    try {
      const res = await axios.post(
        "/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      const resData = await res.data;
      console.log(resData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.login_form}>
      {!isValid ? (
        <>
          <input
            type="email"
            name="email"
            placeholder="Почта"
            value={formData.email}
            onChange={handleChange}
            required
            className={isError ? styles.error : null}
          />
          {isError && <label>текст ошибки</label>}
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
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
