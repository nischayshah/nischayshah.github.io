import { Routes, RouterModule} from "@angular/router";
import { DemoComponent } from './demo/demo.component';
import { HttpdemoTaskComponent } from './httpdemo-task/httpdemo-task.component';
import { ArrDemoComponent } from './arr-demo/arr-demo.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { MainDragDropComponent } from './main-drag-drop/main-drag-drop.component';
const arr: Routes = [
    { path: "", redirectTo: "/demo", pathMatch: "full" },
    { path: "arrdemo", component: ArrDemoComponent },
    { path: "demo", component: DemoComponent },
    { path: "task", component: HttpdemoTaskComponent },
    { path: "addtask", component: AddtaskComponent },
    { path: "taskdetails/:id", component: TaskdetailsComponent },
    { path: "dragdrop", component:MainDragDropComponent },
    { path: "**", component:PagenotfoundComponent }
];
export const routing=RouterModule.forRoot(arr);