import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../../entities/Employee";

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss']
})
export class TableSortComponent implements OnInit {

  @Input() sortBy: keyof Employee = 'fullName'
  @Output() sortEvent = new EventEmitter<keyof Employee>()

  constructor() {
  }

  ngOnInit(): void {
  }

  emitSortEvent() {
    this.sortEvent.emit(this.sortBy)
  }

}
