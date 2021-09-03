import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from '../../config/app-routes.constants';
import { UsersComponent } from './users.component';
import { UsersViewComponent } from '@modules/users/users-view/users-view.component';

const routes: Routes = [
  {
    // Define parent route and component
    path: '',
    component: UsersComponent,
    // Define child routes and respective components
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: appRoutes.users.view,
      },
      {
        path: appRoutes.users.view,
        component: UsersViewComponent
      },
    ]
  },
];

/**
 * Diary module routes file
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
