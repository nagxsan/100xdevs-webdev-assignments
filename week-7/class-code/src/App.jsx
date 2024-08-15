import { useState, useContext } from "react"
import { CountContext } from "./context"

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{count, setCount}} >
      <Count />
    </CountContext.Provider>
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
  const { count } = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {
  const { count, setCount } = useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
