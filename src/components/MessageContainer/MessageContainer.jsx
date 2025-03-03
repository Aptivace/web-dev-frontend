import React, { useEffect } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import styles from "./Styles.module.scss";
import useMessageStore from "../../store/messageStore";
import EmptyChat from "../EmptyChat/EmptyChat";

const MessageContainer = () => {
  const { messages } = useMessageStore();

  return (
    <div className={styles.container}>
      {messages.length ? (
        messages.map((msg) => <ChatMessage key={msg.id} {...msg} />)
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default MessageContainer;
