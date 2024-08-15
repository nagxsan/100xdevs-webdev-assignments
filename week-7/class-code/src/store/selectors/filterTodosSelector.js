import { selector } from "recoil";
import { todoAtom } from "../atoms/todos";
import { filterTodos } from "../atoms/filterTodos";

export const filterTodosSelector = selector({
  key: 'filterTodosSelector',
  get: ({get}) => {
    const todos = get(todoAtom)
    const filter = get(filterTodos)

    return todos.filter((todo) => todo?.title?.includes(filter) || todo?.description?.includes(filter))
  }
})