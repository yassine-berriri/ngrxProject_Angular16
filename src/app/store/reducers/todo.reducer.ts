import { createReducer, on } from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo, loadTodosSuccess, loadTodos } from '../actions/todo.actions';
import { Todo } from '../../models/todo.model';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [
  ],
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodos, (state, { todos }) => ({ ...state, todos })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  }))
);
