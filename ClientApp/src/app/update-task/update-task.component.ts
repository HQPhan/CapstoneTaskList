import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
  providers: [TodoService]
})
export class UpdateTaskComponent implements OnInit {
  @Input() Id:number;
  todo:ToDo;
  constructor(private toDoService:TodoService) { }

  ngOnInit() {
    this.toDoService.GetTask(this.Id).subscribe(
      (response:any) => {console.log(response);
      this.todo = response;
      }
    );
  }

  UpdateTask() {
    let TaskTitle: string = (<HTMLInputElement>document.getElementById("TaskTitle"+this.Id)).value;
    console.log(TaskTitle);
    let FirstName: string = (<HTMLInputElement>document.getElementById("FirstName"+this.Id)).value;
    console.log(FirstName);
    let LastName: string = (<HTMLInputElement>document.getElementById("LastName"+this.Id)).value;
    console.log(LastName);
    let Description: string = (<HTMLInputElement>document.getElementById("Description"+this.Id)).value;
    console.log(Description);
    let IsCompleted: string = (<HTMLInputElement>document.getElementById("Description"+this.Id)).value;
    console.log(Description);
    let DueDate:Date = (<HTMLInputElement>document.getElementById("DueDate"+this.Id)).valueAsDate;
    console.log(DueDate);

    let newTask:ToDo = {Id:this.Id, FirstName:FirstName, LastName:LastName, TaskTitle:TaskTitle, Description:Description, IsCompleted:IsCompleted, DueDate:DueDate};
    this.toDoService.CreateTask(newTask).subscribe(
      (response:any) => { location.reload() }
    );
  }
}
