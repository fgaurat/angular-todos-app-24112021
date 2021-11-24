import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$?:Observable<Todo[]>;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

}
