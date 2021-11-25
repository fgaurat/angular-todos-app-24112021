import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../core/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.url_todos);
  }

  deleteTodo(todo:Todo):Observable<any>{
    const urlDelete = `${environment.url_todos}/${todo.id}`
    return this.http.delete(urlDelete);
  }

}
