import { create } from "zustand";

const useActiveChatStore = create((set) => ({
  activeChat: false,

  setActiveChatId: (newActiveChat) => set({ activeChat: newActiveChat }),
}));

export default useActiveChatStore;
