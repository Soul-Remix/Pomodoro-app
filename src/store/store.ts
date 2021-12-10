import create from 'zustand'

interface State {
    background: string
    setBg: (bg:string) => void
}

const useStore = create<State>(set => ({
  background: "rgb(217, 85, 80)",
  setBg: (bg) => set({background: bg})
}))

export default useStore

