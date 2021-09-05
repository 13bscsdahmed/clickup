import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '@common/elements/select/select.component';


@NgModule({
  declarations: [SelectComponent],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectModule { }
