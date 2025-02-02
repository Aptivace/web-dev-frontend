import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      {!isValid ? (
        <>
          <div className="input-field">
            <input type="text" ref={nameRef} />
          </div>
          <div className="input-field">
            <input type="text" ref={surnameRef} />
          </div>
          <div className="input-field">
            <input type="text" ref={emailRef} />
          </div>
          <div className="input-field">
            <input type="password" ref={passwordRef} />
          </div>
          <div className="input-field">
            <input type="password" ref={confirmPasswordRef} />
          </div>
        </>
      ) : (
        <div className="input-field">
          <input type="text" ref={verifyCodeRef} />
        </div>
      )}
      <button type="submit"></button>
    </form>
  );
};

export default RegisterForm;
