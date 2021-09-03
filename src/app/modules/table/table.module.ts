import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { TableColumnDirective } from './directives/table-column.directive';
import { TableSortDirective } from './directives/table-sort.directive';
import { CustomTableCellComponent } from './components/custom-table-cell/custom-table-cell.component';
import { TableHeaderDirective } from './directives/table-header.directive';



@NgModule({
  declarations: [TableComponent, CustomTableComponent, TableColumnDirective, TableSortDirective, CustomTableCellComponent, TableHeaderDirective],
  imports: [
    CommonModule,
    TableRoutingModule,
    DragDropModule
  ]
})
export class TableModule { }
