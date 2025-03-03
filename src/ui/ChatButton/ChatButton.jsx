import React from "react";
import styles from "./Styles.module.scss";

const ChatButton = ({ name }) => {
  return <button className={styles.btn}>{name}</button>;
};

export default ChatButton;
