import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableModule } from './data-table';

import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule, DataTableModule ],
  declarations: [ AppComponent, DataTableDemo1, DataTableDemo1Remote ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
