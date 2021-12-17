import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesTableComponent} from './employees/employees-table/employees-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {DatePipe} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableSortComponent} from './employees/table-sort/table-sort.component';
import {TableFilterComponent} from './employees/table-filter/table-filter.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {EmployeeFormComponent} from './employees/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    TableSortComponent,
    TableFilterComponent,
    NavBarComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
