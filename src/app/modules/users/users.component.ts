import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '@common/api-service/users/users.service';
import { UsersFacade } from '@store/users';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users$ = this.usersFacade.users$;
  totalRecords$ = this.usersFacade.totalRecords$;
  destroy$ = new Subject();
  constructor(private usersService: UsersService,
              private usersFacade: UsersFacade) { }

  ngOnInit(): void {
    // this.usersService.getUsers({}).subscribe((data) => {
    //   console.log('data', data);
    // });
    this.usersFacade.loadUsers();
    this.users$.pipe((takeUntil(this.destroy$))).subscribe((data) => {
      console.log('users loaded', data);
    });
    this.totalRecords$.pipe((takeUntil(this.destroy$))).subscribe((records) => {
      console.log('total records', records);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
