import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [

    RouterModule,
  ],
  templateUrl: './public-footer.component.html',
  styleUrl: './public-footer.component.scss',
})
export class PublicFooterComponent {
  footerItems = {
    products: [
      { name: 'Marketing', href: '/services' },
      { name: 'Vente', href: '/services', queryParam: 'vente' },
      {
        name: 'Facturation',
        href: '/services',
        queryParam: 'facturation',
      },
      {
        name: 'Trésorerie',
        href: '/services',
        queryParam: 'tresorie',
      },
    ],
    legal: [
      { name: "Conditions d'utilisation", href: '/privacy' },
      { name: 'Politique de confidentialité', href: '/privacy' },
    ],
    business: [
      { name: 'About', href: '/about-us' },
      { name: 'Contactez-nous', href: '/contact-us' },
    ],
    language: [{ name: 'Français' }, { name: 'Arabe' }],
  };
  currentYear = new Date().getFullYear();
}
