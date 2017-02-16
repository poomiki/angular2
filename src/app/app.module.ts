import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { Material2Component } from './material2/material2.component';
import 'hammerjs';
import { Angular2DatatableComponent } from './angular2-datatable/angular2-datatable.component';
import { DataFilterPipe } from './angular2-datatable/data-filter.pipe';
import { Ng2BootstrapComponent } from './ng2-bootstrap/ng2-bootstrap.component';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Material2Component,
    Angular2DatatableComponent,
    DataFilterPipe,
    Ng2BootstrapComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    DataTableModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
