import { create } from "zustand"

export const useAccountStore = create((set) => ({
    accounts: [],

    addAccount: (newAccount) => set((state) => ({ accounts: [newAccount, ...state.accounts]})),
    setAccounts: (newAccounts) => set({ accounts: newAccounts }),
    deleteAccount: (id) => set((state) => ({ accounts: state.accounts.filter((account) => account.id !== id)}))
}))