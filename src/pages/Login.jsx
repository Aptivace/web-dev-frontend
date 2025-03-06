import React from "react";
import LoginForm from "../ui/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register">Зарегаться</Link>
    </>
  );
};

export default Login;
