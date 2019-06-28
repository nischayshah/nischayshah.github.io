import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArrDemoComponent } from './arr-demo/arr-demo.component';
import { FilterPipe } from './filter.pipe';
import { HttpdemoTaskComponent } from './httpdemo-task/httpdemo-task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CreaditcardDirective } from './creaditcard.directive';
import { HighlighterDirective } from './highlighter.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { routing } from "./app.routing";
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainDragDropComponent } from './main-drag-drop/main-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ArrDemoComponent,
    FilterPipe,
    HttpdemoTaskComponent,
    AddtaskComponent,
    CreaditcardDirective,
    HighlighterDirective,
    PagenotfoundComponent,
    TaskdetailsComponent,
    MainNavComponent,
    MainDragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
