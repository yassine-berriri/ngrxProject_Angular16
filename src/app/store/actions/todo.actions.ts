import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const loadTodos = createAction('[Todos] Load Todos', props<{ todos: Todo[] }>());

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: any }>()
);

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ todo: Todo }>()
);

export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ id: string }>()
);

export const toggleTodo = createAction(
  '[Todos] Toggle Todo',
  props<{ id: string }>()
);
