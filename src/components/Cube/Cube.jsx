import React from "react";
import { motion } from "framer-motion";
import styles from "./Styles.module.css"; // Импортируем модульные стили

const Cube = () => {
  return (
    <div className={styles.scene}>
      <motion.div
        className={styles.cube}
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className={`${styles.face} ${styles.front}`}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.right}`}></div>
        <div className={`${styles.face} ${styles.left}`}></div>
        <div className={`${styles.face} ${styles.top}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
      </motion.div>
    </div>
  );
};

export default Cube;
