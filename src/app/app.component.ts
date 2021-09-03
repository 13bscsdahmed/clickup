import { Component } from '@angular/core';
import { NavbarModel } from './modules/shared/components/models/navbar.model';
import { appRoutes } from './config/app-routes.constants';

/**
 * Main App Container component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: NavbarModel[] = [
    {
      label: 'View Users',
      link: `${appRoutes.users.root}/${appRoutes.users.view}`,
      activeClass: 'active'
    },
  ];
}
