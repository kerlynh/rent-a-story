import { create } from "zustand";
import { UserData } from "../types/userType";

interface LoginState {
  user: UserData | undefined;
  error: string | null;
  success: boolean;
  setUserData: (user: UserData | undefined) => void;
  setError: (error: string | null) => void;
  setSuccess: (success: boolean) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  user: undefined,
  error: null,
  success: false,
  setUserData: (user) => set({ user }),
  setError: (error) => set({ error }),
  setSuccess: (success) => set({ success }),
}));
