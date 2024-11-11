import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  email: string;
  nickname: string;
  profileImageIndex: number;
  isLogin: boolean;
  showProfileProposal: boolean;
  validation: Record<string, { isValid: boolean; message: string }>;

  // Actions
  setEmail: (email: string) => void;
  setNickname: (nickname: string) => void;
  setProfileImageIndex: (profileImageIndex: number) => void;
  setIsLogin: (isLogin: boolean) => void;
  setShowProfileProposal: (show: boolean) => void;
  logout: () => void;
  setValidation: (
    validation: Record<string, { isValid: boolean; message: string }>
  ) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: "",
      nickname: "",
      profileImageIndex: 1,
      isLogin: false,
      showProfileProposal: false,
      validation: {
        email: { isValid: true, message: "" },
        password: { isValid: true, message: "" },
        nickname: { isValid: true, message: "" },
      },

      setEmail: (email: string) => set((state) => ({ ...state, email })),
      setNickname: (nickname: string) =>
        set((state) => ({ ...state, nickname })),
      setProfileImageIndex: (profileImageIndex: number) =>
        set((state) => ({ ...state, profileImageIndex })),
      setIsLogin: (isLogin: boolean) => set((state) => ({ ...state, isLogin })),
      setShowProfileProposal: (show: boolean) =>
        set((state) => ({ ...state, showProfileProposal: show })),
      logout: () => {
        set(() => ({
          email: "",
          nickname: "",
          isLogin: false,
          profileImageIndex: 1,
          showProfileProposal: false,
        }));
        localStorage.removeItem("token");
      },
      setValidation: (validation) => set(() => ({ validation })),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        email: state.email,
        nickname: state.nickname,
        isLogin: state.isLogin,
        showProfileProposal: state.showProfileProposal,
        profileImageIndex: state.profileImageIndex,
      }),
    }
  )
);

export default useAuthStore;
