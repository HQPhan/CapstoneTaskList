import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './ToDo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
  url:string = "ToDo";
  constructor(private http: HttpClient, @Inject('BASE URL') baseUrl:string) {
    this.url = baseUrl + this.url;
   }

   GetTaskList() {
    return this.http.get(this.url);
  }

  GetTask(Id: number) {
    return this.http.get(this.url + "/get/" + Id);
  }

  CreateTask(td: ToDo) {

    console.log(td);
    return this.http.post(this.url + "/make/", td);
  }

  DeleteTask(Id: number) {
    return this.http.delete(this.url + "/delete/" + Id);
  }

  UpdateTask(newTD: ToDo, Id: number) {
    return this.http.put(this.url + "/update/" + Id, newTD);
  }
}
