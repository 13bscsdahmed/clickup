import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tableHeader]'
})
export class TableHeaderDirective {

  constructor(public readonly template: TemplateRef<any>) { }
  @Input('tableHeader') headerName: string;
  @Input('sort') sort: string;
}
