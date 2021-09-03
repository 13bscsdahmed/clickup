import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from '../../config/app-routes.constants';

import { TableComponent } from './table.component';

const routes: Routes = [
  {
    // Define parent route and component
    path: '',
    component: TableComponent,
    // Define child routes and respective components
    children: []
  },
];

/**
 * Diary module routes file
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
