import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-taskdetails",
  templateUrl: "./taskdetails.component.html",
  styleUrls: ["./taskdetails.component.css"]
})
export class TaskdetailsComponent implements OnInit {
  id: any;
  constructor(private _rout: ActivatedRoute) {}

   ngOnInit() {
    this.id = this._rout.snapshot.params["id"];

   }
}