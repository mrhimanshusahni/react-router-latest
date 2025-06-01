import { create } from "zustand";

type CounterStore = {
  counter: number;
  incrementCounter: () => void;
  resetCounter: () => void;
  decrementCounter: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
  resetCounter: () => set({ counter: 0 }),
  decrementCounter: () => set((state) => ({ counter: state.counter - 1 })),
}));
