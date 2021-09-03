import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CustomTableModule } from '@common/elements/custom-table';
import { UsersViewComponent } from './users-view/users-view.component';



@NgModule({
  declarations: [UsersComponent, UsersViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CustomTableModule
  ]
})
export class UsersModule { }
