import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const useLoadingStore = create<LoadingState>(
  (set: (partial: Partial<LoadingState>) => void) => ({
    isLoading: false,
    setLoading: (loading: boolean) => set({ isLoading: loading }),
  })
);

export default useLoadingStore;
