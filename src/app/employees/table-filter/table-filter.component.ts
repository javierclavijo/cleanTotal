import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<{ filter: string }>()
  filter: string = ''

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
