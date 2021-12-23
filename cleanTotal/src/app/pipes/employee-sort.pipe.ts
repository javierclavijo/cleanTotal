import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from "../entities/Employee";

@Pipe({
  name: 'employeeSort'
})
export class EmployeeSortPipe implements PipeTransform {

  transform(value: Employee[], sortBy: keyof Employee | undefined, sortOrder: 'asc' | 'desc'): Employee[] {
    if (!sortBy) {
      return value
    }

    const sortFunction = (a: Employee, b: Employee) => {
      const valueA = a[sortBy]
      const valueB = b[sortBy]

      if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1
      }
      if (valueB > valueA) {
        return sortOrder === "asc" ? -1 : 1
      }
      return 0
    }

    return value.sort(sortFunction)
  }


}
