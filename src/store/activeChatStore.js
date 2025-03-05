import { create } from "zustand";

const useActiveChatStore = create((set) => ({
  activeChatId: "",

  setActiveChatId: (id) => set({ activeChatId: id }),
}));

export default useActiveChatStore;
