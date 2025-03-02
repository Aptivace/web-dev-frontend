import React from "react";
import styles from "./Styles.module.scss";
import { useState } from "react";

const UserMessage = ({ user_message, bot_message }) => {
  return (
    <>
      <div className={styles.message}>
        <h1>{user_message}</h1>
      </div>
      <div className={styles.message + " " + styles.bot}>
        <h1>{bot_message ? bot_message : "ВъебАИ ебашит..."}</h1>
      </div>
    </>
  );
};

export default UserMessage;
