import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Sort, SortOrder } from '@common/elements/custom-table/models';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tableSort]'
})
export class TableSortDirective {
  sortable = false;
  currentSortField: string;
  currentSortOrder: SortOrder;
  sortIcon = this.renderer.createElement('i');
  @Input()
  set tableSort(sortable: boolean) {
    this.sortable = sortable;
  }
  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor(private targetElement: ElementRef, private renderer: Renderer2) { }

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
    this.getIcon();

    this.sort.emit({sortField: this.currentSortField, sortOrder: this.currentSortOrder});

  }

  @HostListener('mouseover')
  addIcon() {
    if (!this.sortable) {
      return;
    }
    const elem = this.targetElement.nativeElement;
    this.getIcon();
    this.renderer.appendChild(elem, this.sortIcon);
  }
  @HostListener('mouseleave')
  removeIcon() {
    if (!this.sortable) {
      return;
    }
    if (this.sortIcon) {
      const elem = this.targetElement.nativeElement;
      this.renderer.removeChild(elem, this.sortIcon);
    }
  }
  getIcon() {
    this.renderer.addClass(this.sortIcon, 'fas');
    if (this.currentSortOrder === SortOrder.asc) {
      this.renderer.removeClass(this.sortIcon, 'fa-angle-up');
      this.renderer.addClass(this.sortIcon, 'fa-angle-down');
    } else {
      this.renderer.removeClass(this.sortIcon, 'fa-angle-down');
      this.renderer.addClass(this.sortIcon, 'fa-angle-up');
    }
  }

}
