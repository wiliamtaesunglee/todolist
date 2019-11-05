import reducerTodo from "./redux-flow/reducers/todos";
import reducerVisibilityFilter from './redux-flow/reducers/visibility-filter';

const reducer = (state = {}, action) => {
  return {
    todos: reducerTodo(state.todos, action),
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
  }
}

export default reducer
