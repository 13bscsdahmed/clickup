import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@common/elements/custom-table/models';
import { UsersFacade } from '@store/users';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersViewComponent implements OnInit, OnDestroy {
  users$ = this.usersFacade.users$;
  form: FormGroup = this.createForm();
  totalRecords$ = this.usersFacade.totalRecords$;
  selectedOptions$ = this.usersFacade.selectedOptions$;
  destroy$ = new Subject();
  headerKeys = [
    'firstName',
    'lastName',
    'age',
    'height',
  ];
  constructor(private usersFacade: UsersFacade,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usersFacade.loadUsers();
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      console.log('data', data);
    });

    // this.usersFacade.setSelectedOptions({page: 2, limit: 10});
    // this.usersFacade.loadUsers();
  }
  onSort(data: Sort) {
    console.log('sort data', data);
  }
  private createForm(): FormGroup {
    return this.formBuilder.group({
      pagination: { page: null, limit: null },
      years: false,
    });
  }

  ngOnDestroy() {
    this.usersFacade.clearState();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
