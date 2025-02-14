import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Styles.module.scss";

const Prompt = () => {
  const [isError, setIsError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.prompt + " " + styles.empty}
    >
      <input type="text" placeholder="Введите запрос..." required />
      <button>
        <FaArrowRight />
      </button>
    </form>
  );
};

export default Prompt;
