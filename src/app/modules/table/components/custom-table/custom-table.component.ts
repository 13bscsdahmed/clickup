import {
  AfterContentInit, ChangeDetectionStrategy,
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
import { TableHeaderDirective } from '../../directives/table-header.directive';

export interface Mock {
  firstName: string;
  lastName: string;
  age: number;
  height: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent implements OnInit, AfterContentInit {

  @Input() dataSource: any[];
  @Input() keys: string[];
  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();
  constructor() { }
  @ContentChildren(TableColumnDirective) columnList: QueryList<TableColumnDirective>;
  @ContentChildren(TableHeaderDirective) headerList: QueryList<TableHeaderDirective>;
  @ViewChild('defaultColumnTemplate', { static: true }) defaultColumnTemplate: TemplateRef<any>;
  @ViewChild('defaultHeaderTemplate', { static: true }) defaultHeaderTemplate: TemplateRef<any>;
  columnListArray: TableColumnDirective[];
  headerListArray: TableHeaderDirective[];

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
  }
  ngAfterContentInit(){
    this.headerListArray = this.headerList.toArray();
    this.columnListArray = this.columnList.toArray();

  }
  getTemplate(key: string): TemplateRef<any> {
    return this.columnListArray.find(data => data.columnName === key)?.template || this.defaultColumnTemplate;
  }
  getHeaderTemplate(key: string): TemplateRef<any> {
    return this.headerListArray.find(data => data.headerName === key)?.template || this.defaultHeaderTemplate;
  }
  getHeaderSort(key: string): boolean {
    if (key === 'lastName') {
      console.log('found obj', this.headerListArray.find(data => data.headerName === key));
      console.log('in if', this.headerListArray.find(data => data.headerName === key)?.sort);
    }
    const template = this.headerListArray.find(data => data.headerName === key);
    return !!(template && template.sort === 'true');
  }
}


