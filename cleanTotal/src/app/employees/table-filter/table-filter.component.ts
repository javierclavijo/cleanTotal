import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input() columns: string[][]=[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
