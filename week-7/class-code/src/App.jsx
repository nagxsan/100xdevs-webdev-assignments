import { useState } from "react"
import { useRecoilValue, useSetRecoilState, RecoilRoot, useRecoilState } from 'recoil'
import { todoAtom } from "./store/atoms/todos.js"
import { filterTodos } from "./store/atoms/filterTodos.js"
import { filterTodosSelector } from "./store/selectors/filterTodosSelector.js"

export default function App() {

  return (
    <RecoilRoot>
      <TodoDetails />
      <FilterTodo />
      <DisplayTodos />
    </RecoilRoot>
  )
}

function TodoDetails() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodo = useSetRecoilState(todoAtom)

  const handleButtonClick = () => {
    setTitle('')
    setDescription('')
    addTodo(todo => [...todo, {title, description}])
  }

  return (
    <div>
      <div>
        <span>Enter title: </span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <span>Enter description: </span>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button onClick={handleButtonClick}>
        Add Todo
      </button>
    </div>
  )
}

function FilterTodo() {
  const [filter, setFilter] = useRecoilState(filterTodos)
  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}

function DisplayTodos() {
  const todos = useRecoilValue(filterTodosSelector)
  return (
    <div>
      {todos.map((todo, idx) => (
        <div key={idx}>
          <div>Title: {todo?.title}</div>
          <div>Description: {todo?.description}</div>
        </div>
      ))}
    </div>
  )
}
