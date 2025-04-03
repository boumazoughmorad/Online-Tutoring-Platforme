import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () =>
    import('./public/public-home/public-home.component').then(
      (m) => m.PublicHomeComponent
    ),
  children: [
    {
      path: '',
      loadComponent: () =>
        import(
          './public/public-home-page/public-home-page.component'
          ).then((m) => m.PublicHomePageComponent),
    },
  ]
}];
