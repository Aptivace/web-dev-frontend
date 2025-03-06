import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Styles.module.css";
import useMessageStore from "../../store/messageStore";
import axios from "../../api/axios";
import useActiveChatStore from "../../store/activeChatStore";

const Prompt = () => {
  const { messages, addMessage, updateBotMessage } = useMessageStore();
  const { activeChat } = useActiveChatStore();

  const [promptText, setPromptText] = useState("");

  const handleChange = (e) => {
    setPromptText(e.target.value);
  };

  const [isError, setIsError] = useState();

  const sendMessage = async () => {
    try {
      await addMessage(promptText, activeChat.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage();
    console.log(messages);
    setPromptText("");
  };

  return (
    <>
      {activeChat && (
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
      )}
    </>
  );
};

export default Prompt;
