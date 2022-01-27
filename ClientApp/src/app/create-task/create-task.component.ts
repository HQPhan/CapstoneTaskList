import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TodoService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private toDoService:TodoService) { }

  ngOnInit() {
  }

  CreateTask() {
    let TaskTitle: string = (<HTMLInputElement>document.getElementById("TaskTitle")).value;
    console.log(TaskTitle);
    let FirstName: string = (<HTMLInputElement>document.getElementById("FirstName")).value;
    console.log(FirstName);
    let LastName: string = (<HTMLInputElement>document.getElementById("LastName")).value;
    console.log(LastName);
    let Description: string = (<HTMLInputElement>document.getElementById("Description")).value;
    console.log(Description);
    let DueDate:Date = (<HTMLInputElement>document.getElementById("DueDate")).valueAsDate;
    console.log(DueDate);

    let newTask:ToDo = {Id:0, FirstName:FirstName, LastName:LastName, TaskTitle:TaskTitle, Description:Description, IsCompleted:"No", DueDate:DueDate};
    this.toDoService.CreateTask(newTask).subscribe(
      (response:any) => { location.reload() }
    );
  }

}
