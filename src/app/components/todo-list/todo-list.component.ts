import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo } from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$!: Todo[];
  newTodoTitle ='';
  constructor(private store: Store<{todos: {todos: Todo[]}}>) {
    this.store.select('todos').subscribe(todosState => {
      this.todos$ = todosState.todos;
      console.log(this.todos$);
    });
   } 

  addTodo(): void {
      if(this.newTodoTitle.trim() === '') {
        return;
      }

      const todo:Todo = {
        id:Date.now().toString(),
        title: this.newTodoTitle,
        completed: false,
        userId: 1
      }
  }

  toggleTodoCompletion(id: string): void {

  }

  removeTodo(id: string): void {

  }

}
