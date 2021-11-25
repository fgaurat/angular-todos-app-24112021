import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo';

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
  constructor() { }

  ngOnInit(): void {
  }

  submitTodo(){
    console.log(this.todo)
  }
}
