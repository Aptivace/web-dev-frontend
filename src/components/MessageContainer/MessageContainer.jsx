import React, { useEffect } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import styles from "./Styles.module.scss";
import useMessageStore from "../../store/store";

const MessageContainer = () => {
  const { messages } = useMessageStore();

  return (
    <div className={styles.container}>
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
};

export default MessageContainer;
