import React from "react";
import useChatStore from "../../store/chatStore";
import ChatButton from "../../ui/ChatButton/ChatButton";
import styles from "./Styles.module.scss";

const ChatsArray = () => {
  const { chats } = useChatStore();

  return (
    <div className={styles.chats}>
      {chats.length ? (
        chats.map((chat) => {
          return <ChatButton key={chat.id} {...chat} />;
        })
      ) : (
        <h1>Чатов нет.</h1>
      )}
    </div>
  );
};

export default ChatsArray;
