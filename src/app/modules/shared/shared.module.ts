import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormControlValidationMsgDirective } from './directives/formcontrol-validation-msg.directive';
import { FormSubmitValidationMsgDirective } from './directives/formsubmit-validation-msg.directive';

import { ValidationMsgService } from './services/validation-msg.service';
import { RouterModule } from '@angular/router';
import { NumberLoopPipe } from './pipes/number-loop.pipe';

/**
 * Module contains all the shared dependencies
 */
@NgModule({
  declarations: [
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective,
    NumberLoopPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective,
    MDBBootstrapModule,
    NumberLoopPipe,

  ],
  providers: [
    ValidationMsgService
  ]
})
export class SharedModule { }
