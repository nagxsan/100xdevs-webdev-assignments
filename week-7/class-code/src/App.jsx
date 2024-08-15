import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil'
import { countAtom } from './store/atoms/count.jsx'

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
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
