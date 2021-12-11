import create from "zustand";

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

const useStore = create<State>((set, get) => ({
  background: "rgb(69, 124, 163)",
  times: { pomodoro: 25, long: 15, short: 5 },
  settings: {
    awake: true,
    vibrate: true,
    alarm: false,
  },
  setBg: (bg) => set({ background: bg }),
  setTimes: (val) => set({ times: { ...get().times, ...val } }),
  setSettings: (val) => set({ settings: { ...get().settings, ...val } }),
}));

export default useStore;
