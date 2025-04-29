import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Styles.module.css";
import useMessageStore from "../../store/messageStore";
import useActiveChatStore from "../../store/activeChatStore";

const Prompt = () => {
  const { messages, addMessage } = useMessageStore();
  const { activeChat } = useActiveChatStore();

  const [promptText, setPromptText] = useState("");
  const textareaRef = useRef();

  const handleChange = (e) => {
    setPromptText(e.target.value);
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      // Сбрасываем высоту, чтобы она могла уменьшаться
      textareaRef.current.style.height = "auto";
      // Устанавливаем новую высоту на основе scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    setPromptText("");
  }, [activeChat]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [promptText]);

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
    setPromptText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "70px";
    }
    await sendMessage();
  };

  return (
    <>
      {activeChat && (
        <form onSubmit={handleSubmit} className={styles.prompt}>
          <div className={styles.container}>
            <textarea
              type="text"
              value={promptText}
              onChange={handleChange}
              placeholder="Введите запрос..."
              required
              ref={textareaRef}
              style={{ height: "70px" }}
            />
          </div>
          <button>
            <FaArrowRight />
          </button>
        </form>
      )}
    </>
  );
};

export default Prompt;
