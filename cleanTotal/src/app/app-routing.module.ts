import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesTableComponent} from "./employees/employees-table/employees-table.component";
import {EmployeeFormComponent} from "./employees/employee-form/employee-form.component";

const routes: Routes = [
  {'path': 'employees', component: EmployeesTableComponent},
  {'path': 'employees/new', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
