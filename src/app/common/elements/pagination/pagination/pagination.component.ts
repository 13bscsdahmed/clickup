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
  @Input() recordsPerPage: number;
  pageNumber = 1;
  totalPages: number;
  ngControl: NgControl;
  disabled = false;
  val: number;
  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) { }

  ngOnInit(): void {}
  ngOnChanges() {
    this.calculatePages();
  }

  ngAfterContentInit(): void {
    // @ts-ignore
    this.ngControl = this.injector.get(NgControl, null);
  }

  public runChangeDetection() {
    this.cdRef.detectChanges();
  }
  onChange: any = () => {};
  onTouch: any = () => {};
  set value(val: number) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
  }
  // this method sets the value programmatically
  writeValue(value: number) {
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
  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
