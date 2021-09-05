import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@common/elements/pagination/pagination.component';
import { SharedModule } from '@shared/shared.module';
import { SelectModule } from '@common/elements/select/select.module';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
