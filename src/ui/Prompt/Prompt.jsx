import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Styles.module.scss";
import useMessageStore from "../../store/messageStore";
import axios from "../../api/axios";
import useActiveChatStore from "../../store/activeChatStore";

const Prompt = () => {
  const { addMessage } = useMessageStore();
  const { activeChatId } = useActiveChatStore();

  const [promptText, setPromptText] = useState("");

  const handleChange = (e) => {
    setPromptText(e.target.value);
  };

  const [isError, setIsError] = useState();

  const sendMessage = async () => {
    try {
      const res = await axios.post(`/chat/${activeChatId}/send`, {
        user_message: promptText,
      });
      const resData = await res.data;
      addMessage({
        user_message: promptText,
      });
      console.log(resData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    setPromptText("");
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
