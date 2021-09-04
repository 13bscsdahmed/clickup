import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

import { PreloadSelectedModules } from './strategies/preload-selected-modules.strategy';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { constants } from './config/app.constants';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptedHttp } from '@common/interceptors/http.interceptor';


/**
 * Main app module
 */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    ToastrModule.forRoot(
      constants.toast.config
    ),
  ],
  providers: [
    PreloadSelectedModules,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptedHttp,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
