import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NumberLoopPipe } from './pipes/number-loop.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { CmToFeetPipe } from './pipes/cm-to-feet.pipe';

/**
 * Module contains all the shared dependencies
 */
@NgModule({
  declarations: [
    NumberLoopPipe,
    LoaderComponent,
    CmToFeetPipe,
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
    LoaderComponent,
    CmToFeetPipe,

  ],
  providers: []
})
export class SharedModule { }
