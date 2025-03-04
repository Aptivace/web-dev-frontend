import React, { useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import styles from "./Styles.module.scss";
import useMessageStore from "../../store/messageStore";
import EmptyChat from "../EmptyChat/EmptyChat";

const MessageContainer = () => {
  const { messages } = useMessageStore();

  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  });

  return (
    <div className={styles.container} ref={scrollRef}>
      {messages.length ? (
        messages.map((msg) => <ChatMessage key={msg.id} {...msg} />)
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default MessageContainer;
