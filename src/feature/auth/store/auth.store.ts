import { create } from "zustand";
import { IAuthStore, IStoredCredentials } from "../types/auth.interface";

const useAuthStore = create<IAuthStore>((set) => ({
  credentials: null,

  setCredentials: (value: IStoredCredentials) =>
    set(() => ({ credentials: value })),
  removeCredentials: () => set({ credentials: null }),
}));

export default useAuthStore;

// { UID: "1", role: "admin", token: "123123" }
