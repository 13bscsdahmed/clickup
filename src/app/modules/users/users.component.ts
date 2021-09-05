import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '@common/api-service/users/users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersFacade } from '@store/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users$ = this.usersFacade.users$;
  totalRecords$ = this.usersFacade.totalRecords$;
  selectedOptions$ = this.usersFacade.selectedOptions$;
  destroy$ = new Subject();
  constructor(private usersService: UsersService,
              private usersFacade: UsersFacade) { }

  ngOnInit(): void {
    // this.usersFacade.setSelectedOptions({
    //   page: 1,
    //   limit: 5
    // });
    this.usersFacade.loadUsers();

    this.users$.pipe((takeUntil(this.destroy$))).subscribe((data) => {
      console.log('users loaded', data);
    });
    this.selectedOptions$.pipe((takeUntil(this.destroy$))).subscribe((records) => {
      console.log('selected options', records);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
