import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { TableColumnDirective } from './directives/table-column.directive';
import { TableSortDirective } from './directives/table-sort.directive';



@NgModule({
  declarations: [TableComponent, CustomTableComponent, TableColumnDirective, TableSortDirective],
  imports: [
    CommonModule,
    TableRoutingModule,
    DragDropModule
  ]
})
export class TableModule { }
