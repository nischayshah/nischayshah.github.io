import { Component, OnInit } from "@angular/core";
import { Task } from "./task";

@Component({
  selector: "app-arr-demo",
  templateUrl: "./arr-demo.component.html",
  styleUrls: ["./arr-demo.component.css"]
})
export class ArrDemoComponent implements OnInit {
  no1:number=0;
  flag:boolean=false;
  todo: Task[] = [
    new Task(1, "go for running", "pending"),
    new Task(2, "learn angular", "done")
  ];
  str:string='';
  constructor() {}

  ngOnInit() {}
  onDeleteClick(item: Task) {
    this.todo.splice(this.todo.indexOf(item), 1);
  }
  onTodoAdd(txtid, txttitle, txtstatus) {
    this.todo.push(new Task(txtid, txttitle, txtstatus));
  }
  onNewTask(){
this.flag=true;
  }
  onEditClick(item: Task) {
    if (item.status == "done") {
      item.status = "pending";
    }
    else{
      item.status="done";
    }
  }
}
