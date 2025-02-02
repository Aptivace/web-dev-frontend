import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEyeSlash, FaEye } from "react-icons/fa";

const LoginForm = () => {
  const passwordRef = useRef();
  const emailRef = useRef();

  const verifyCodeRef = useRef();

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

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
    <form onSubmit={handleSubmit}>
      {isValid ? (
        <>
          <div className="login-input">
            <FaUser />
            <input type="text" ref={emailRef} placeholder="Почта" required />
          </div>
          <div className="login-input">
            {passCheck.check ? (
              <FaEyeSlash
                size={25}
                onClick={() => setPassCheck({ check: false, type: "password" })}
              />
            ) : (
              <FaEye
                size={25}
                onClick={() => setPassCheck({ check: true, type: "text" })}
              />
            )}
            <input
              type={passCheck.type}
              ref={passwordRef}
              placeholder="Пароль"
              required
            />
          </div>
        </>
      ) : (
        <div className="login-input">
          <input type="text" ref={verifyCodeRef} />
        </div>
      )}
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
