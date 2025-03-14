import React, { useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import styles from "./Styles.module.css";
import useMessageStore from "../../store/messageStore";
import EmptyChat from "../EmptyChat/EmptyChat";
import useActiveChatStore from "../../store/activeChatStore";
import axios from "../../api/axios";
import Cube from "../Cube/Cube";

const MessageContainer = () => {
  const { messages } = useMessageStore();
  const { activeChat } = useActiveChatStore();
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  if (!activeChat) {
    return (
      <div className={styles.container}>
        <Cube />
      </div>
    );
  }

  return (
    <div className={styles.container} ref={scrollRef}>
      {messages.length ? (
        messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            {...msg}
            chatName={activeChat.name}
            siteLink={activeChat.siteLink}
          />
        ))
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default MessageContainer;
