import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/core/model/todo';
import { MessageBusService } from 'src/app/core/service/message-bus.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {

  todoForm = this.fb.group({
    title:['Reactive Form'],
    dueDate:[new Date()],
    completed:[false],
  })

  constructor(private fb:FormBuilder,private todoService:TodoService, private messageBus:MessageBusService) { }

  ngOnInit(): void {
  }

  submitTodo(){
    const ts = new Date(this.todoForm.value.dueDate).getTime()
    const todo:Todo = {...this.todoForm.value,dueDate:ts}
    console.log(todo)

    this.todoService.addTodo(todo).subscribe( () => this.messageBus.dispatch({type:'NEW_TODO'}))

  }

}
