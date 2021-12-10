import create from 'zustand'

interface State {
    background: string
    times: {
      pomodoro: number,
      long:number,
      short:number
    }
    setBg: (bg:string) => void
    setTimes: (val: {}) => void
}

const useStore = create<State>((set,get) => ({
  background: "rgb(217, 85, 80)",
  times: {pomodoro: 25,long:15,short:5},
  setBg: (bg) => set({background: bg}),
  setTimes: (val) => set({times: {...get().times, ...val}})
}))

export default useStore

