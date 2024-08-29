import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set: any) => ({
      lang: "uz",
      setLang: (payload: string) => set({ lang: payload }),
    }),
    {
      name: "app-state-auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
