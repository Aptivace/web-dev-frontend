import { useEffect } from "react";
import useChatStore from "../../store/chatStore";
import ChatButton from "../../ui/ChatButton/ChatButton";
import styles from "./Styles.module.css";
import axios from "../../api/axios";

const ChatsArray = () => {
  const { chats, setChats } = useChatStore();

  useEffect(() => {
    const fetchChats = async () => {
      const res = await axios.get("/chats");
      const resData = await res.data;
      setChats(resData.data.items);
    };
    fetchChats();
    console.log(chats);
  }, []);

  return (
    <div className={styles.chats}>
      {chats.length ? (
        chats.map((chat) => {
          return <ChatButton key={chat.id} {...chat} />;
        })
      ) : (
        <h1>Чатов нет.</h1>
      )}
    </div>
  );
};

export default ChatsArray;
