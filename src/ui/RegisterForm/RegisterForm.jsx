import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../RegisterForm/Styles.module.css";
import axios from "../../api/axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    inviteCode: "",
    verifyCode: "",
  });

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [validateError, setValidateError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    inviteCode: "",
    errorPlaceHolder: "",
  });

  const submitFirstStep = async () => {
    try {
      const res = await axios.post("/auth/register", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirm,
        invite_code: formData.inviteCode,
      });

      const resData = await res.data;
      console.log(resData);
      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(false);
      if (!err.response) {
        return;
      }
      console.log(err.response.data);
      if (err.response.status === 422) {
        if (err.response.data.errors.email) {
          setValidateError((prev) => ({
            ...prev,
            email: "Почта указана неправильно",
          }));
        }
        if (err.response.data.errors.password) {
          setValidateError((prev) => ({
            ...prev,
            password: "Пароль не указан / указан неправильно",
          }));
        }
      }
      if (err.response.status === 400) {
        setValidateError((prev) => ({
          ...prev,
          inviteCode:
            "На этот инвайт код превышено кол-во регистраций. Введите другой!",
        }));
      }
    }
  };

  const submitLastStep = async () => {
    try {
      const res = await axios.post("/auth/verify", {
        email: formData.email,
        verify_code: formData.verifyCode,
      });

      const resData = await res.data;
      console.log(resData);
      navigate("/chats");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSuccess) {
      return submitLastStep();
    }
    if (isValid) {
      submitFirstStep();
    }
  };

  const validate = () => {
    // Password validation
    if (formData.password && formData.password.length < 8) {
      setValidateError((prev) => ({
        ...prev,
        password: "Пароль должен содержать 8 символов",
      }));
    } else if (formData.password && !/\d/.test(formData.password)) {
      setValidateError((prev) => ({
        ...prev,
        password: "Пароль должен содежать минимум 1 цифру",
      }));
    } else if (formData.password && !/[a-z]/.test(formData.password)) {
      setValidateError((prev) => ({
        ...prev,
        password: "Пароль должен содежать минимум 1 строчную букву",
      }));
    } else if (formData.password && !/[A-Z]/.test(formData.password)) {
      setValidateError((prev) => ({
        ...prev,
        password: "Пароль должен содежать минимум 1 заглавную букву",
      }));
    } else {
      setValidateError((prev) => ({ ...prev, password: "" }));
    }

    // Confirm password validation
    if (
      formData.passwordConfirm &&
      formData.passwordConfirm !== formData.password
    ) {
      setValidateError((prev) => ({
        ...prev,
        passwordConfirm: "Пароли не совпадают",
      }));
    } else {
      setValidateError((prev) => ({ ...prev, passwordConfirm: "" }));
    }

    if (validateError.password && validateError.password) {
      return setIsValid(false);
    }
    setIsValid(true);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    validate();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        {!isSuccess ? (
          <>
            <h1>Регистрация</h1>
            <input
              type="text"
              name="firstName"
              placeholder="Имя"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Фамилия"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Почта"
              value={formData.email}
              onChange={handleChange}
              required
              className={validateError.email ? styles.error : null}
            />
            {validateError.email && <label>{validateError.email}</label>}
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={validateError.password ? styles.error : null}
            />
            {validateError.password && <label>{validateError.password}</label>}
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Подтверждение пароля"
              value={formData.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={validateError.passwordConfirm ? styles.error : null}
            />
            {validateError.passwordConfirm && (
              <label>{validateError.passwordConfirm}</label>
            )}
            <input
              type="text"
              name="inviteCode"
              placeholder="Реферальный код"
              value={formData.inviteCode}
              onChange={handleChange}
              required
              className={validateError.inviteCode ? styles.error : null}
            />
            {validateError.inviteCode && (
              <label>{validateError.inviteCode}</label>
            )}
          </>
        ) : (
          <>
            <h1>Верификация</h1>
            <input
              type="text"
              name="verifyCode"
              placeholder="Код подтверждения"
              value={formData.verifyCode}
              onChange={handleChange}
              required
            />
          </>
        )}
        <button type="submit">
          {!isValid ? "Регистрация" : "Подтвердить"}
        </button>
        {!isValid && (
          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        )}
      </form>
    </>
  );
};

export default RegisterForm;
