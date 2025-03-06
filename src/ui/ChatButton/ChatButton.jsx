import React from "react";
import styles from "./Styles.module.scss";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import useChatStore from "../../store/chatStore";
import axios from "../../api/axios";
import useMessageStore from "../../store/messageStore";
import useActiveChatStore from "../../store/activeChatStore";

const ChatButton = ({ id, name, site_link }) => {
  const [isHover, setIsHover] = useState(false);

  const { deleteChat } = useChatStore();
  const { setMessages } = useMessageStore();
  const { setActiveChatId, activeChat } = useActiveChatStore();

  const fetchMessages = async () => {
    if (id !== activeChat.id) {
      try {
        const res = await axios.get(`/chat/${id}`);
        const resData = await res.data;
        setActiveChatId({ id: id, name: name, siteLink: site_link });
        setMessages(resData.data.items);
        console.log(resData.data.items);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleChatRemove = async () => {
    // try {
    //   const res = await axios.delete(`/chat/${id}`);
    //   const resData = await res.data;
    //   deleteChat(id);
    //   console.log(`Чат ${resData.name} удален`);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <button
      className={styles.btn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => fetchMessages()}
    >
      {name}
      {isHover && <FaTrash onClick={() => handleChatRemove()} size={18} />}
    </button>
  );
};

export default ChatButton;
