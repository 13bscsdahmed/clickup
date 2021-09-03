import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tableColumn]'
})
export class TableColumnDirective {

  constructor(public readonly template: TemplateRef<any>) { }

  @Input('tableColumn') columnName: string;

}
