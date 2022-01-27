export interface ToDo {
  Id:number;
  FirstName:string;
  LastName:string;
  TaskTitle:string;
  Description:string;
  IsCompleted:string;
  DueDate:Date;
}

export class Convert {
  public static toToDo(json: string): ToDo {
      return JSON.parse(json);
  }

  public static toDoToJson(value: ToDo): string {
      return JSON.stringify(value);
  }
}