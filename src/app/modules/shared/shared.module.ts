import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NumberLoopPipe } from './pipes/number-loop.pipe';

/**
 * Module contains all the shared dependencies
 */
@NgModule({
  declarations: [
    NumberLoopPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NumberLoopPipe,

  ],
  providers: []
})
export class SharedModule { }
