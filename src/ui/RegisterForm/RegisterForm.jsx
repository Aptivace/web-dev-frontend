import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../RegisterForm/Styles.module.scss";
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

  const [validateError, setValidateError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    inviteCode: "",
  });

  const proverka = () => {
    setIsError(!isError);
  };

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
      setIsValid(true);
    } catch (err) {
      console.log(err);
    }
  };

  const submitLastStep = async () => {
    try {
      const res = await axios.post(
        "/auth/verify",
        {
          email: formData.email,
          verify_code: formData.verifyCode,
        },
        { withCredentials: true }
      );

      const resData = await res.data;
      console.log(resData);
      console.log(resData.credentials);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      return submitLastStep();
    }
    submitFirstStep();
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
      formData.passwordConfirm != formData.password
    ) {
      setValidateError((prev) => ({
        ...prev,
        passwordConfirm: "Пароли не совпадают",
      }));
    } else {
      setValidateError((prev) => ({ ...prev, passwordConfirm: "" }));
    }
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
        {!isValid ? (
          <>
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
          <input
            type="text"
            name="verifyCode"
            placeholder="Код подтверждения"
            value={formData.verifyCode}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">
          {!isValid ? "Регистрация" : "Подтвердить"}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
