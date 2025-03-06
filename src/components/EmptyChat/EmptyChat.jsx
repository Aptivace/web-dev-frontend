import React from "react";
import styles from "./Styles.module.css";

const EmptyChat = () => {
  return (
    <div className={styles.empty}>
      <h1>Добро пожаловать в WebAI!</h1>
      <h2>Здесь вы можете создать лэндинг для вашего бизнеса.</h2>
    </div>
  );
};

export default EmptyChat;
