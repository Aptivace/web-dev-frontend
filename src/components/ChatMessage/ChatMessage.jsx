import React from "react";
import styles from "./Styles.module.css";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import useActiveChatStore from "../../store/activeChatStore";

const UserMessage = ({ user_message, bot_message }) => {
  const { activeChat } = useActiveChatStore();
  console.log(activeChat);
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={styles.message}
      >
        <h1>{user_message}</h1>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.message + " " + styles.bot}
      >
        <h1>
          {bot_message ? (
            <>
              {bot_message}
              {"."} Ваш новый лендинг:{" "}
              <a target="_blank" href={activeChat.siteLink}>
                {activeChat.name}
              </a>
            </>
          ) : (
            "ВъебАИ ебашит..."
          )}
        </h1>
      </motion.div>
    </>
  );
};

export default UserMessage;
