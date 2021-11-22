import { useRef } from 'react'
import { useStore, actions } from './store'

// import Todo from './todo-reducer'

function App () {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        ref={inputRef}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />

      <button onClick={handleAdd}>Add</button>

      {
        todos.map((todo, index) => <li key={index}>{todo}</li>)
      }
    </div>
  )
}

export default App;
