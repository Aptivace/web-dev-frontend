import styles from "./Styles.module.css";
import { motion } from "framer-motion";

const UserMessage = ({ user_message, bot_message, chatName, siteLink }) => {
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
              <a target="_blank" href={siteLink}>
                {chatName}
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
