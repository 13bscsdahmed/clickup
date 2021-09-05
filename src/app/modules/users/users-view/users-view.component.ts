import { Component, OnInit } from '@angular/core';
import { Sort } from '@common/elements/custom-table/models';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {

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
    setTimeout(() => {
      this.mockData = [...this.mockData];
      this.mockData.push(
        {
          firstName: 'New',
          lastName: 'Data',
          age: 22,
          height: '5 5'
        }
      );
    }, 3000);
  }
  onSort(data: Sort) {
    console.log('sort data', data);
  }

}
