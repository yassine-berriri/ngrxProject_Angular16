import {createReducer, on} from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo } from '../actions/todo.actions';
import { Todo } from '../../models/todo.model';

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: [
        {
            id: "1",
            title: "Todo 1",
            completed: false,
            userId: 1
        },
    ],
};

export const TodoReducer = createReducer(
initialState,
 on(addTodo, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo],
 })),
    on(removeTodo, (state, { id }) => ({
            ...state,
            todos: state.todos.filter((todo) => todo.id !== id),
    })),
    on(toggleTodo, (state, { id }) => ({
            ...state,
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            }),
    })
)
);