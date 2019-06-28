import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  a: number = 10;
  flag:boolean=true;
res:number=0;
  constructor(private _route: Router) {}

  ngOnInit() {}
    jinal() {

    if(this.flag==true){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
    onNavigate() {
    	  this._route.navigate(["/addtask"]);
  	  }
  onNavigate1(){
    this._route.navigate(['/taskdetails',101]);
  }
    onAddClick(no1, no2) {
        this.res = parseInt(no1) + parseInt(no2);
    }

}
