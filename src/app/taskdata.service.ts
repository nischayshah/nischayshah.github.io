import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskModel } from './httpdemo-task/task_model';
@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
//nodejsapidemo.herokuapp.com
  url:string="https://nodejsapidemo.herokuapp.com/tasks/";
  constructor(private _http:HttpClient) { }

  getAllTask(){
      return this._http.get(this.url);
  }
  addTask(item:TaskModel){
    let body=JSON.stringify(item);
    let x=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:x});
  }
  deleteTask(id){
    let x=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+id,{headers:x});
  }
}
