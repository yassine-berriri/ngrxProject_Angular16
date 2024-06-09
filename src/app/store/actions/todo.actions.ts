 import { createAction, props } from "@ngrx/store";
 import { Todo } from "../../models/todo.model";
 
 
 export const addTodo = createAction("[Todos] add Todo", props<{ todo: Todo }>());

 export const removeTodo = createAction("[Todos] remove Todo", props<{ id: string }>());

 export const toggleTodo = createAction("[Todos] toggle Todo", props<{ id: string }>());
