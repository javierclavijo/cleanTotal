import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesTableComponent} from "./employees/employees-table/employees-table.component";
import {EmployeeCreateComponent} from "./employees/employee-create/employee-create.component";

const routes: Routes = [
  {'path': 'employees', component: EmployeesTableComponent},
  {'path': 'employees/new', component: EmployeeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
