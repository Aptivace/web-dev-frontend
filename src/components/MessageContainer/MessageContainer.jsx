import React from "react";
import UserMessage from "../UserMessage/UserMessage";
import styles from "./Styles.module.scss";

const MessageContainer = () => {
  return (
    <div className={styles.container}>
      <UserMessage />
      <UserMessage />
      <UserMessage />
      <UserMessage />
      <UserMessage />
    </div>
  );
};

export default MessageContainer;
