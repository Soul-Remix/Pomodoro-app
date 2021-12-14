import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface State {
  background: string;
  times: {
    pomodoro: number;
    long: number;
    short: number;
  };
  settings: {
    awake: boolean;
    vibrate: boolean;
    alarm: boolean;
  };
  setBg: (bg: string) => void;
  setTimes: (val: {}) => void;
  setSettings: (val: {}) => void;
}

const useStore = create<State>(
  persist(
    (set, get) => ({
      background: "rgb(76, 145, 149)",
      times: { pomodoro: 25, long: 15, short: 5 },
      settings: {
        awake: true,
        vibrate: true,
        alarm: false,
      },
      setBg: (bg) => set({ background: bg }),
      setTimes: (val) => set({ times: { ...get().times, ...val } }),
      setSettings: (val) => set({ settings: { ...get().settings, ...val } }),
    }),
    {
      name: "Pomodoro-Settings",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useStore;
