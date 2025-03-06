import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "../api/axios";
import { v4 as uuidv4 } from "uuid";

const useMessageStore = create(
  immer((set) => ({
    messages: [],
    loading: false,
    error: null,
    // Установить весь список сообщений
    setMessages: (messageArr) =>
      set({ messages: messageArr, loading: false, error: null }),

    addMessage: async (userMessage, chatId) => {
      const tempId = uuidv4();

      set((state) => {
        state.messages.push({
          id: tempId, // Исправлено: используется tempId
          user_message: userMessage,
          bot_message: null, // Это заглушка, будет заменено после API запроса
        });
      });
      try {
        const res = await axios.post(`/chat/${chatId}/send`, {
          user_message: userMessage,
        });
        const resData = await res.data;
        console.log(resData.data.bot_message);

        set((state) => {
          const index = state.messages.findIndex((msg) => msg.id === tempId);
          if (index !== -1) {
            state.messages[index] = {
              id: tempId,
              user_message: userMessage,
              bot_message: resData.data.bot_message,
            };
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  }))
);

export default useMessageStore;
