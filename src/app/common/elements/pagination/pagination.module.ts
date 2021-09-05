import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
