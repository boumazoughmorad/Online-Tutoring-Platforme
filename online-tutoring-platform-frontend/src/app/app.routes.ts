import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () =>
    import('./pages/public/public-page/public-home.component').then(
      (m) => m.PublicHomeComponent
    ),
  children: [
    {
      path: '',
      loadComponent: () =>
        import(
          './pages/public/public-home-page/public-home-page.component'
          ).then((m) => m.PublicHomePageComponent),
    },
    {
      path: 'services',
      loadComponent: () =>
        import(
          './pages/public/our-service/our-service.component'
          ).then((m) => m.OurServiceComponent),
    },
    {
      path: 'about-us',
      loadComponent: () =>
        import(
          './pages/public/about-us/about-us.component'
          ).then((m) => m.AboutUsComponent),
    },
    {
      path: 'how-platform-work',
      loadComponent: () =>
        import(
          './pages/public/how-platform-work/how-platform-work.component'
          ).then((m) => m.HowPlatformWorkComponent),
    },
    {
      path: 'contact-us',
      loadComponent: () =>
        import(
          './pages/public/contact/contact.component'
          ).then((m) => m.ContactComponent),
    },
  ]
},


  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Connexion',
      roles: [] // Accessible to all
    }
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/registration/registration.component').then(m => m.RegisterComponent),
    data: {
      title: 'Connexion',
      roles: [] // Accessible to all
    }
  },
 
  {
    path: 'workspace',
    loadComponent: () =>
      import('./pages/workspace/workspace.component').then(
        (m) => m.WorkspaceComponent
      ),
    children: [    {
      path: 'dashboard',
      loadComponent: () =>
        import(
          './pages/workspace/dashboard-user/page-dashboard-user.component'
          ).then((m) => m.DashboardUserComponent),
    },
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/workspace/page-search-to-tutor/page-search-to-tutor.component'
            ).then((m) => m.SearchToTutorComponent),
      },
      {
        path: 'tutor/:id',
        loadComponent: () =>
          import(
            './pages/workspace/page-tutor-detail/page-tutor-detail.component'
            ).then((m) => m.TutorDetailComponent),
      },

      {
        path: 'conversation',
        loadComponent: () =>
          import(
            './pages/workspace/page-messages/page-messages.component'
            ).then((m) => m.MessagesComponent),
      },
      {
        path: 'my-courses',
        loadComponent: () =>
          import(
            './pages/workspace/page-my-courses/page-my-courses.component'
            ).then((m) => m.MyCoursesComponent),
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import(
            './pages/workspace/page-schedule/page-schedule.component'
            ).then((m) => m.ScheduleComponent),
      },
      {
        path: 'live-classroom/:id',
        loadComponent: () =>
          import(
            './pages/workspace/page-live-classroom/page-live-classroom.component'
            ).then((m) => m.LiveClassroomComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import(
            './pages/workspace/page-settings/page-settings.component'
            ).then((m) => m.SettingsComponent),
      },
    ]
    }
];
