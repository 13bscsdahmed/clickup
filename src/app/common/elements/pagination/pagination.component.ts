import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Injector,
  Input, OnChanges,
  OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PaginationModel } from '@common/elements/pagination/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaginationComponent),
      multi: true,
    },
  ],
})
export class PaginationComponent implements OnInit, OnChanges, AfterContentInit, ControlValueAccessor {
  @Input() totalRecords: number;
  @Input() recordsPerPage = 10;
  totalPages: number;
  ngControl: NgControl;
  disabled = false;
  val: PaginationModel;
  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) { }

  ngOnInit(): void {}
  ngOnChanges() {
    this.calculatePages();
  }

  ngAfterContentInit(): void {
    this.ngControl = this.injector.get(NgControl, null);
  }

  public runChangeDetection() {
    this.cdRef.detectChanges();
  }
  onChange: any = () => {};
  onTouch: any = () => {};
  set value(val: PaginationModel) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
  }
  // this method sets the value programmatically
  writeValue(value: PaginationModel) {
    this.value = value;
    this.val = value;
    this.cdRef.markForCheck();
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  calculatePages() {
    if (this.totalRecords <= 0) {
      this.totalPages = 0;
    } else {
      this.totalPages = Math.floor(this.totalRecords / this.recordsPerPage);
      if (this.totalRecords % this.recordsPerPage !== 0) {
        this.totalPages += 1;
      }
    }
    console.log('total pages', this.totalPages);
  }
  pageSelect(page: number) {
    this.writeValue({
      page,
      limit: this.recordsPerPage
    });
  }
  incrementPage() {
    if (!(this.value.page + 1 > this.totalPages)) {
      this.pageSelect(this.value.page + 1);
    }
  }
  decrementPage() {
    if (!(this.value.page !==  1)) {
      this.pageSelect(this.value.page - 1);
    }
  }
  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
