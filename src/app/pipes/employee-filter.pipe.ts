import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from "../entities/Employee";

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value: Employee[], filteringTerm: string): Employee[] {
    return value.filter(employee =>
      Object.values(employee).some(value =>
        value.toString().includes(filteringTerm)
      )
    );
  }

}
