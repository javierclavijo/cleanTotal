import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableColumn} from "../../entities/TableColumn";
import {TableFilter} from "../../entities/TableFilter";
import {Employee} from "../../entities/Employee";

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input() columns: TableColumn[] = []
  @Output() filterEvent = new EventEmitter<TableFilter>()
  filter: string = ''
  selectedBy: keyof Employee = "fullName"

  constructor() {
  }

  ngOnInit(): void {
  }

  emitFilterEvent() {
    this.filterEvent.emit({
      by: this.selectedBy,
      filter: this.filter
    })
  }

}
