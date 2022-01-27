import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [TodoService]
})
export class CRUDComponent implements OnInit {
  todos?: ToDo[] = [];
  constructor(private toDoService:TodoService) { 
    this.toDoService.GetTaskList().subscribe(
      (response:any) => {this.todos = response}
    )
  }

  ngOnInit(){
  }

  DeleteTask(Id:number, i:number){
    this.toDoService.DeleteTask(Id).subscribe(
      (response:any) => {
        console.log("Task #" + Id + "was deleted successfully from the database");
        this.todos.splice(i,1);
      }      
    )
  }

  EditTask(Id:number) {
    let displayPanel = document.getElementById("display" + Id);
    let editPanel = document.getElementById("edit" + Id);

    if (displayPanel.style.display === ""
      || displayPanel.style.display === "inherit") {
      displayPanel.style.display = "none";
      editPanel.style.display = "inherit";
    }
    else if (displayPanel.style.display === "none") {
      displayPanel.style.display = "inherit";
      editPanel.style.display = "none";
    }
  }
}
