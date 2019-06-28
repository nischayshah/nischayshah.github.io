import { Component, OnInit } from "@angular/core";
import { TaskdataService } from "../taskdata.service";
import { TaskModel } from "../httpdemo-task/task_model";

@Component({
  selector: "app-addtask",
  templateUrl: "./addtask.component.html",
  styleUrls: ["./addtask.component.css"]
})
export class AddtaskComponent implements OnInit {
  arr: string[] = ["done", "pending"];
  id: string = "";
  title: string = "";
  status: string = "pending";
  constructor(private _data: TaskdataService) {}

  ngOnInit() {}
  onTaskAdd(f) {
    console.log(f);
    //let item = new TaskModel(this.id, this.title, this.status);
    // this._data.addTask(f.value).subscribe((data: any) => {
    //   console.log(data);
    //   alert('added');
    // });
  }
}
