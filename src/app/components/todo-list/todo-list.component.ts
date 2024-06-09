import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo, loadTodos } from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$!: Todo[];
  newTodoTitle ='';
  constructor(private store: Store<{todos: {todos: Todo[]}}>) {
    this.store.select('todos').subscribe(todosState => {
      this.todos$ = todosState.todos;
      console.log(this.todos$);
    });
   }
   
   ngOnInit(): void {
      this.store.dispatch(loadTodos({todos:this.todos$}));
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

      this.store.dispatch(addTodo({
        todo
      }));
      this.newTodoTitle = "";
  }

  toggleTodoCompletion(id: string): void {
    this.store.dispatch(toggleTodo({id}));
  }

  removeTodo(id: string): void {
    this.store.dispatch(removeTodo({id}));
  }

}
