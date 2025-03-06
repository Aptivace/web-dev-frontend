import { create } from "zustand";

const useChatStore = create((set) => ({
  chats: [],

  setChats: (newChats) => set({ chats: [...newChats] }),

  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),

  deleteChat: (id) =>
    set((state) => ({
      chats: state.chats.filter((chat) => chat.id !== id),
    })),
}));

export default useChatStore;
