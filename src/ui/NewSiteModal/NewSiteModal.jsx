import { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import axios from "../../api/axios";
import useChatStore from "../../store/chatStore";
import useUserStore from "../../store/userStore.js";

const NewSiteModal = ({ setIsClicked }) => {
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    chatName: "",
  });

  const { addChat } = useChatStore();
  const { balanceDecrement } = useUserStore();

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

  const submitName = async () => {
    try {
      const res = await axios.post("/chats", { name: formData.chatName });
      const resData = await res.data;
      addChat(resData.data);
      balanceDecrement();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitName()) {
      setIsClicked(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <input
          type="text"
          name="chatName"
          placeholder="Введите имя..."
          value={formData.chatName}
          onChange={handleChange}
          required
        />
        <button type="submit">Создать</button>
      </form>
    </motion.div>
  );
};

export default NewSiteModal;
