import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//incluyendo formulario
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

/*Incluyendo servicios */
import {CrudService} from '../app/service/crud.service'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
