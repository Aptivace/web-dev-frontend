import { create } from "zustand";

const useMessageStore = create((set) => ({
  messages: [],

  // Установить весь список сообщений
  setMessages: (messageArr) => set({ messages: messageArr }),

  // Добавить новое сообщение
  addMessage: (newMessage) =>
    set((state) => {
      // Получаем id последнего сообщения
      const lastId =
        state.messages.length > 0
          ? state.messages[state.messages.length - 1].id
          : 0;

      // Создаем новое сообщение с id = lastId + 1
      const messageWithId = {
        ...newMessage,
        id: lastId + 1,
        bot_message: null,
      };

      // Возвращаем обновленный массив сообщений
      return { messages: [...state.messages, messageWithId] };
    }),

  // Обновить bot_message в существующем сообщении
  updateBotMessage: (id, newBotMessage) =>
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, bot_message: newBotMessage } : msg
      ),
    })),
}));

export default useMessageStore;
