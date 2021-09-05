import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@common/elements/custom-table/models';
import { UsersFacade } from '@store/users';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersViewComponent implements OnInit, OnDestroy {
  users$ = this.usersFacade.users$;
  totalRecords$ = this.usersFacade.totalRecords$;
  selectedOptions$ = this.usersFacade.selectedOptions$;
  destroy$ = new Subject();
  headerKeys = [
    'firstName',
    'lastName',
    'age',
    'height',
  ];
  constructor(private usersFacade: UsersFacade) { }

  ngOnInit(): void {
    this.usersFacade.loadUsers();

    // this.usersFacade.setSelectedOptions({page: 2, limit: 10});
    // this.usersFacade.loadUsers();
  }
  onSort(data: Sort) {
    console.log('sort data', data);
  }

  ngOnDestroy() {
    this.usersFacade.clearState();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
