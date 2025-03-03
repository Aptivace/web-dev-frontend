import { create } from "zustand";

const useChatStore = create((set) => ({
  chats: [
    {
      id: 1,
      name: "Лютый лендинг",
    },
    {
      id: 2,
      name: "Парсер онлифанса",
    },
    {
      id: 3,
      name: "Ебанутейший лендинг",
    },
  ],

  setChats: (newChats) => set({ chats: newChats }),

  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}));

export default useChatStore;
