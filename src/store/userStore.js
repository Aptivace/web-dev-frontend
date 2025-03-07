import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: null,

  setUserData: (newUserData) => set({ userData: newUserData }),
}));

export default useUserStore;
