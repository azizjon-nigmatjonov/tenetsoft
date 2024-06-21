import { create } from "zustand";

export const useSearch = create((set: any) => ({
  search: false,
  setSearchValue: (payload: string) => set({ search: payload }),
}));
