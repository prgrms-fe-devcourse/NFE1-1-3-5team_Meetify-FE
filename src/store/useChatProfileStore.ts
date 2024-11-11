import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChatProfileStoreoreState {
  profileIndex: number;
  setProfileIndex: (index: number) => void;
}

const useChatStore = create<ChatProfileStoreoreState>()(
  persist(
    (set) => ({
      profileIndex: 1,

      // 전역 상태에 특정 userId의 채팅방 리스트 설정
      setProfileIndex: (index: number) =>
        set(() => ({
          profileIndex: index,
        })),
    }),
    {
      name: "chat-profile-storage", // 로컬 스토리지 키 설정
      partialize: (state) => ({
        profileIndex: state.profileIndex,
      }),
    }
  )
);

export default useChatStore;
