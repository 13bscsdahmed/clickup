import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Sort, SortOrder } from '../models/table.model';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tableSort]'
})
export class TableSortDirective {
  sortable = false;
  currentSortField: string;
  currentSortOrder: SortOrder;
  @Input()
  set tableSort(sortable: boolean) {
    this.sortable = sortable;
  }
  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor(private targetElement: ElementRef) { }

  @HostListener('click')
  sortData() {
    if (!this.sortable) {
      return;
    }

    const elem = this.targetElement.nativeElement;

    const field = elem.getAttribute('headerName');
    if (field !== this.currentSortField) {
      this.currentSortField = field;
      this.currentSortOrder = SortOrder.asc;
    } else {
      this.currentSortOrder *= -1;
    }

    this.sort.emit({sortField: this.currentSortField, sortOrder: this.currentSortOrder});

  }

}
