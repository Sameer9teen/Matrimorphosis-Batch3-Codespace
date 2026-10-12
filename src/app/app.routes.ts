import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { RideSelection } from './features/rides/components/ride-selection/ride-selection';
import { NearbyDrivers } from './features/rides/components/nearby-drivers/nearby-drivers';
import { RideHistory } from './features/rides/components/ride-history/ride-history';
import { RideHistoryDetailsPage } from './features/rides/pages/ride-history-details-page/ride-history-details-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
  },

  {
    path: 'rides',
    component: RideSelection,
  },

  {
    path: 'drivers',
    component: NearbyDrivers,
  },

  // Concept 9: Route-level lazy loading
  // Eager loading example:
  // {
  //   path: 'dashboard',
  //   component: ServiceDashboard,
  // },

  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './features/dashboard/components/service-dashboard/service-dashboard'
      ).then((m) => m.ServiceDashboard),
  },

  // Concept 10: Route parameters
  {
    path: 'ride-history',
    component: RideHistory,
  },

  {
    path: 'ride-history/:id',
    component: RideHistoryDetailsPage,
  },
];