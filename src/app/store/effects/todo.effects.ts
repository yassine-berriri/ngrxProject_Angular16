import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../../models/todo.model';
import { Action } from '@ngrx/store';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      exhaustMap(() =>
        this.todoService.getTodos().pipe(
          map((todos: Todo[]) => TodoActions.loadTodos({ todos })),
          catchError(error => of(TodoActions.loadTodosFailure({ error })))
        )
      )
    )
  );
}
