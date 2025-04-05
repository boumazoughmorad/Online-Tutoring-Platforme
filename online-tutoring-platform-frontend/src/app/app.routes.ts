import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () =>
    import('./public/public-page/public-home.component').then(
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
    {
      path: 'services',
      loadComponent: () =>
        import(
          './public/our-service/our-service.component'
          ).then((m) => m.OurServiceComponent),
    },
    {
      path: 'about-us',
      loadComponent: () =>
        import(
          './public/about-us/about-us.component'
          ).then((m) => m.AboutUsComponent),
    },
    {
      path: 'how-platform-work',
      loadComponent: () =>
        import(
          './public/how-platform-work/how-platform-work.component'
          ).then((m) => m.HowPlatformWorkComponent),
    },
    {
      path: 'contact-us',
      loadComponent: () =>
        import(
          './public/contact/contact.component'
          ).then((m) => m.ContactComponent),
    },
  ]
},
{
  path: 'tutor-login',
  loadComponent: () =>
    import(
      './public/tutor-login/tutor-login.component'
      ).then((m) => m.TutorLoginComponent),
},
{
  path: 'user-login',
  loadComponent: () =>
    import(
      './public/user-login/user-login.component'
      ).then((m) => m.UserLoginComponent),
},
];
