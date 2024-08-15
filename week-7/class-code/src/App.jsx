import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil'
import { countAtom } from './store/atoms/count.js'
import { evenSelector } from "./store/selectors/evenSelector.js"

export default function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count() {
  console.log("re-rendering")
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCountRenderer />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return (
    <div>
      {isEven ? "This is even" : ""}
    </div>
  )
}
