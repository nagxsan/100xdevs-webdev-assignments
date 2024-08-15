import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil'
import { countAtom } from './store/atoms/count.js'

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
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )
}
