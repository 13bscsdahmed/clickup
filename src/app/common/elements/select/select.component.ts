import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef, Injector, Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PaginationModel } from '@common/elements/pagination';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, AfterViewInit, AfterContentInit, ControlValueAccessor {
  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) { }
  ngControl: NgControl;
  disabled = false;
  val: PaginationModel;
  @Input() options: any[];

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.ngControl = this.injector.get(NgControl, null);
  }
  ngAfterViewInit(): void {

  }
  public runChangeDetection() {
    this.cdRef.detectChanges();
  }
  onChange: any = () => {};
  onTouch: any = () => {};
  set value(val: any) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
  }
  // this method sets the value programmatically
  writeValue(value: any) {
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
  valueChanged(val) {
    this.writeValue(val);
  }
  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
