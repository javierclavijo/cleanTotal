import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Employee} from "../../entities/Employee";

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<{ filter: string }>()
  filter: string = ''
  selectedBy: keyof Employee = "fullName"

  constructor() {
  }

  ngOnInit(): void {
  }

  emitFilterEvent() {
    this.filterEvent.emit({
      filter: this.filter
    })
  }

}
