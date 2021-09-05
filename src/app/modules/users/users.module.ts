import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CustomTableModule } from '@common/elements/custom-table';
import { UsersViewComponent } from './users-view/users-view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_NAME, UsersEffects, UsersFacade, usersReducer } from '@store/users';
import { PaginationModule } from '@common/elements/pagination/pagination.module';


@NgModule({
  declarations: [UsersComponent, UsersViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CustomTableModule,
    PaginationModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(FEATURE_NAME, usersReducer),
  ],
  providers: [
    UsersFacade
  ]
})
export class UsersModule { }
