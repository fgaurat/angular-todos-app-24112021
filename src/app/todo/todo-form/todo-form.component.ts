import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo:Todo = {
    title:"Le titre",
    completed:true,
    dueDate:new Date(),
  }
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  submitTodo(){
    this.todoService.addTodo(this.todo).subscribe()

  }
}
