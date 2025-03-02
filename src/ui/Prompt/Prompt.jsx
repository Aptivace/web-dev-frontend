import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Styles.module.scss";
import useMessageStore from "../../store/store";

const Prompt = () => {
  const { addMessage } = useMessageStore();
  const [promptText, setPromptText] = useState("");

  const handleChange = (e) => {
    setPromptText(e.target.value);
  };

  const [isError, setIsError] = useState();

  const handleSubmit = (e) => {
    addMessage({
      user_message: promptText,
    });

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.prompt}>
      <input
        type="text"
        value={promptText}
        onChange={handleChange}
        placeholder="Введите запрос..."
        required
      />
      <button>
        <FaArrowRight />
      </button>
    </form>
  );
};

export default Prompt;
