import { Component, OnInit } from '@angular/core';
import { UsersService } from '@common/api-service/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers({}).subscribe((data) => {
      console.log('data', data);
    });
  }


}
