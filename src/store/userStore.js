import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: null,

  setUserData: (newUserData) => set({ userData: newUserData }),

  balanceDecrement: () => set((state) => ({ userData: { ...state.userData, balance: state.userData.balance - 30} })),

  balanceIncrement: () => set((state) => ({userData: {...state.userData, balance: state.userData.balance + 60} })),
}));

export default useUserStore;
