import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { CustomTableCellComponent } from './custom-table-cell/custom-table-cell.component';
import { TableColumnDirective, TableSortDirective, TableHeaderDirective } from './directives';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    CustomTableComponent,
    CustomTableCellComponent,
    TableColumnDirective,
    TableSortDirective,
    TableHeaderDirective
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    CustomTableComponent,
    CustomTableCellComponent,
    TableColumnDirective,
    TableSortDirective,
    TableHeaderDirective
  ]
})
export class CustomTableModule { }
