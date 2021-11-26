import { Component, OnInit } from '@angular/core';
import { Observable,of, switchMap } from 'rxjs';
import { Action } from 'src/app/core/action/action';
import { Todo } from 'src/app/core/model/todo';
import { MessageBusService } from 'src/app/core/service/message-bus.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$?:Observable<Todo[]>

  displayedColumns: string[] = ['id','title','completed','dueDate','actions'];

  constructor(private todoService:TodoService, private messageBus:MessageBusService) { }

  ngOnInit(): void {

    this.todos$ = this.todoService.getTodos();

    this.messageBus.bus$.subscribe( (message:Action) => {

      if( message.type=="NEW_TODO"){
        this.todos$ = this.todoService.getTodos();
      }
      else if(message.type=="DELETE_TODO"){

      }

    })

  }

  onDelete(todo:Todo){
    // this.todos$ =  this.todoService.deleteTodo(todo).pipe(
    //   switchMap( () => this.todoService.getTodos())
    // )

    this.messageBus.dispatch({type:"DELETE_TODO",payload:todo})
    // this.todoService.deleteTodo(todo).subscribe(() => this.todos$ = this.todoService.getTodos());
  }

}
