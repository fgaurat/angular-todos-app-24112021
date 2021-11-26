import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo';
import { MessageBusService } from 'src/app/core/service/message-bus.service';
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
  constructor(private todoService:TodoService,private messageBus:MessageBusService) { }

  ngOnInit(): void {

  }

  submitTodo(){
    const ts = new Date(this.todo.dueDate).getTime()
    const todo:Todo = {...this.todo,dueDate:ts}
    this.todoService.addTodo(todo).subscribe( () => this.messageBus.dispatch({type:'NEW_TODO'}))
  }


}
