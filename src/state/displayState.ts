import { create } from "zustand";

export type DisplayOptions = {
  target: boolean;
  romanized: boolean;
  native: boolean;
  tags: boolean;
};

export type DisplayStoreState = {
  display: DisplayOptions;
  toggleDisplay(key: string): void;
};

export const useDisplayStore = create<DisplayStoreState>((set) => ({
  display: {
    target: true,
    romanized: true,
    native: true,
    tags: true,
  },
  toggleDisplay(key: keyof DisplayOptions) {
    set((state) => ({
      ...state,
      display: {
        ...state.display,
        [key]: !state.display[key],
      },
    }));
  },
}));
