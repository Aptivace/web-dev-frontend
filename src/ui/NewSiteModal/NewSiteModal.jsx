import React, { useEffect } from "react";
import styles from "./Styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const NewSiteModal = ({ setIsClicked }) => {
  const modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsClicked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // newChat add
  };

  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <form onSubmit={handleSubmit} ref={modalRef}>
        <h1>Созданние новго проекта</h1>
        <input type="text" placeholder="Введите имя..." required />
        <button type="submit">Создать</button>
      </form>
    </motion.div>
  );
};

export default NewSiteModal;
