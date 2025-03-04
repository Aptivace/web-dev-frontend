import React from "react";
import styles from "./Styles.module.scss";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import useChatStore from "../../store/chatStore";

const ChatButton = ({ id, name }) => {
  const [isHover, setIsHover] = useState(false);

  const { chats, deleteChat } = useChatStore();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleChatRemove = () => {
    deleteChat(id);
    console.log(id);
  };

  return (
    <button
      className={styles.btn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
      {isHover && <FaTrash onClick={() => handleChatRemove()} size={18} />}
    </button>
  );
};

export default ChatButton;
