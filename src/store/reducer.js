import {
  SET_TODO_INPUT,
  ADD_TODO,
} from './constans'

const initState = {
  todos: [],
  todoInput: '',
}

function reducer (state, action) {

  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    default:
      throw new Error('Invalid Action')
  }

}

export { initState }
export default reducer