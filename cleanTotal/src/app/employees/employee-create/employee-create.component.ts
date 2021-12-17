import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmployeeService} from "../../employee.service";
import {Datasource} from "../../entities/Datasource";
import {Employee} from "../../entities/Employee";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  datasource?: Datasource;
  message?: string;

  employeeForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    surname2: ['', Validators.required],
    phone: ['', Validators.required],
    datebirthday: ['', Validators.required],
    countryId: ['', Validators.required],
    sex: ['', Validators.required]
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
    this.service.addEmployee({
      ...this.employeeForm.value,
      lastModification: Date(),
      countryId: parseInt(this.employeeForm.value.countryId)
    }).subscribe(e => {
      let employee = new Employee(e, this.datasource!)
      this.message = `Employee ${employee.fullName} added successfully.`
    })
  }
}
