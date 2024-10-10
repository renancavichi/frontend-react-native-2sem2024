import { create } from "zustand"

export const useAccountStore = create((set) => ({
    accounts: [],

    addAccount: (newAccount) => set((state) => ({ accounts: [newAccount, ...state.accounts]})),
    setAccounts: (newAccounts) => set({ accounts: newAccounts }),
    deleteAccount: (id) => set((state) => ({ accounts: state.accounts.filter((account) => account.id !== id)})),
    updateAccount: (newAccount) => set((state) => ({ accounts: state.accounts.map((account) => account.id === newAccount.id ? newAccount : account)}))
}))