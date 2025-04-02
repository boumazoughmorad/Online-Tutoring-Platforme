import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () =>
    import('./public/public-home/public-home.component').then(
      (m) => m.PublicHomeComponent
    ),
  children: [
    // {
    //   path: 'pricing',
    //   loadComponent: () =>
    //     import(
    //       './features/brochure-website/pages/pricing/pricing.component'
    //       ).then((m) => m.PricingComponent),
    // },
  ]
}];
