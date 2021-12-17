import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {EmployeeService} from "../../employee.service";
import {Datasource} from "../../entities/Datasource";
import {EmployeeList} from "../../entities/EmployeeList";
import {DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  datasource?: Datasource;

  employeeForm = this.fb.group({
    firstName: [''],
    surname: [''],
    surname2: [''],
    phone: [''],
    birthDate: [''],
    country: [''],
    gender: ['']
  })

  constructor(
    private service: EmployeeService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getDatasource();
  }

  async getDatasource(): Promise<void> {
    let datasourceObservable = await this.service.getDatasource()
    datasourceObservable.subscribe(data => this.datasource = data)
  }

  onSubmit(): void {

  }
}
