import { create } from "zustand";

export const useSearch = create((set: any) => ({
  search: "",
  setSearchValue: (payload: string) => set({ search: payload }),
}));
