import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { TableColumnDirective, TableSortDirective, TableHeaderDirective } from './directives';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaginationModule } from '@common/elements/pagination/pagination.module';



@NgModule({
  declarations: [
    CustomTableComponent,
    TableColumnDirective,
    TableSortDirective,
    TableHeaderDirective
  ],
  imports: [
    CommonModule,
    DragDropModule,
    PaginationModule
  ],
  exports: [
    CustomTableComponent,
    TableColumnDirective,
    TableSortDirective,
    TableHeaderDirective
  ]
})
export class CustomTableModule { }
