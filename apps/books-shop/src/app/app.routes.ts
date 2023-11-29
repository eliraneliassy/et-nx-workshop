import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },

  {
    path: 'feed',
    loadComponent: () => import('@etoro/feed').then(c => c.FeedComponent)

  },
  {
    path:
      'cart',
    loadComponent: () => import('@etoro/cart').then(c => c.CartComponent)
  }
];
