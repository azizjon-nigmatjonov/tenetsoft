import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useSearchHistory = create(
  persist(
    (set: any) => ({
      history_list: [],
      setHistoryList: (payload: any) => set({ history_list: payload }),
    }),
    {
      name: "app-state-auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
