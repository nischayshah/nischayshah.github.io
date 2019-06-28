import { Component, OnInit } from "@angular/core";
import { TaskModel } from "./task_model";
import { TaskdataService } from "../taskdata.service";
@Component({
  selector: "app-httpdemo-task",
  templateUrl: "./httpdemo-task.component.html",
  styleUrls: ["./httpdemo-task.component.css"]
})
export class HttpdemoTaskComponent implements OnInit {
  arr: TaskModel[] = [];
  constructor(private _data: TaskdataService) {}
  ngOnInit() {
    this._data.getAllTask().subscribe((data: TaskModel[]) => {
      this.arr = data;
    });
  }
  onDeleteClick(item: TaskModel) {
    this._data.deleteTask(item.Id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
    });
  }
}
