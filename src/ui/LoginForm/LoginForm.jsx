import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Styles.module.css";
import axios from "../../api/axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");

  const submitForm = async () => {
    try {
      const res = await axios.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      const resData = await res.data;
      console.log(resData);
      navigate("/chats");
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setErrorText("Неверные логин или пароль");
            break;
          case 403:
            setErrorText("Почта не подтверждена!");
            break;
          case 408:
            setErrorText(
              "Время на подтверждение почты вышло. Аккаунт был удален! Зарегистрируйтесь заново",
            );
            break;
          case 422:
            setErrorText("Неверные логин или пароль");
            break;
          default:
            setErrorText("Произошла неизвестная ошибка!");
            break;
        }
      } else {
        setErrorText("Произошла неизвестная ошибка!");
      }
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Вход</h1>
      <input
        type="email"
        name="email"
        placeholder="Почта"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errorText && <p className={styles.errorText}>{errorText}</p>}
      <button type="submit">Войти</button>
      <p>
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>
    </form>
  );
};

export default LoginForm;
