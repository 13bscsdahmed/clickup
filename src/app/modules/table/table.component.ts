import { Component, OnInit } from '@angular/core';
import { Sort } from './models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  keys = [
    'firstName',
    'lastName',
    'age',
    'height',
  ];

  mockData: any[] = [
    {
      firstName: 'Danish',
      lastName: 'Ahmed',
      age: 27,
      height: '5 11'
    },
    {
      firstName: 'Salman',
      lastName: 'Tariq',
      age: 15,
      height: '6 3'
    },
    {
      firstName: 'Hassan',
      lastName: 'Ishaq',
      age: 22,
      height: '5 10'
    },
    {
      firstName: 'Hammad',
      lastName: 'Azam',
      age: 18,
      height: '5 5'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSort(data: Sort) {
    console.log('sort data', data);
  }


}
