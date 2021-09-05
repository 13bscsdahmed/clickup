import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '@common/elements/select/select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SelectComponent],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NgSelectModule,
    FormsModule
  ]
})
export class SelectModule { }
