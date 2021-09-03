import {
  AfterContentInit,
  Component,
  ContentChildren, EventEmitter,
  Input,
  OnInit, Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TableColumnDirective } from '../../directives/table-column.directive';
import { Sort } from '../../models/table.model';

export interface Mock {
  firstName: string;
  lastName: string;
  age: number;
  height: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterContentInit {

  @Input() dataSource: any[];
  @Input() keys: string[];
  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();
  constructor() { }
  @ContentChildren(TableColumnDirective) columnList: QueryList<TableColumnDirective>;
  @ViewChild('defaultColumnTemplate', { static: true }) defaultColumnTemplate: TemplateRef<any>;
  columnListArray: TableColumnDirective[];

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
  }
  ngAfterContentInit(){
    this.columnListArray = this.columnList.toArray();
  }
  getTemplate(key: string): TemplateRef<any> {
    return this.columnListArray.find(data => data.columnName === key)?.template || this.defaultColumnTemplate;
  }
}


