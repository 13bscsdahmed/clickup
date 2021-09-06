import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './config/app-routes.constants';
import { PreloadSelectedModules } from './strategies/preload-selected-modules.strategy';

const routes: Routes = [
  { // Redirect '' to public route
    path: '',
    pathMatch: 'full',
    redirectTo: appRoutes.users.root,
    data : {
      preload: true
    }
  },
  { // Go to diary route
    path: appRoutes.users.root,
    data: {
      preload: true
    },
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  { // Redirect in case of wildcards / undefined routes
    path: '**',
    redirectTo: appRoutes.users.root
  }
];

/**
 * Main app routing modules
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadSelectedModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
