import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@common/elements/custom-table/models';
import { UsersFacade } from '@store/users';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, pairwise, skip, startWith, take, takeUntil } from 'rxjs/operators';

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
    this.updateUsers({});
    this.form.valueChanges.pipe(takeUntil(this.destroy$), startWith(null), pairwise(), debounceTime(500)).subscribe(([prev, latest]) => {
      if (!prev) {
        this.updateUsers(this.prepareFormParams(latest));
      } else {
        // Reset pagination
        if (prev.q !== latest.q) {
          const resetPagination = { page: 1, limit: latest.pagination.limit };
          this.form.patchValue({
            pagination: resetPagination
          }, { emitEvent: false });
          const objectToUpdate = {
            ...latest,
            pagination: resetPagination
          };
          this.updateUsers(this.prepareFormParams(objectToUpdate));
        } else {
          this.updateUsers(this.prepareFormParams(latest));
        }
      }
    });

  }
  // mapValuesToForm
  prepareFormParams(data){
   return {
      page: data.pagination.page,
      limit: data.pagination.limit,
      q: data.q
    };
  }
  onSort(data: Sort) {
    this.updateUsers({
      sort: data.sortField,
      order: data.sortOrder
    });
  }
  private createForm(): FormGroup {
    return this.formBuilder.group({
      pagination: { page: 1, limit: 10 },
      q: '',
    });
  }
  updateUsers(updatedParams) {
    this.usersFacade.selectedOptions$.pipe(take(1)).subscribe((data) => {
      this.usersFacade.setSelectedOptions({
        ...data,
        ...updatedParams
      });
    });
    this.usersFacade.loadUsers();
  }

  ngOnDestroy() {
    this.usersFacade.clearState();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
