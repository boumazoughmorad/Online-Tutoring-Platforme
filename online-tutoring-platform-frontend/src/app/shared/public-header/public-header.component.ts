import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
// import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button.component';
// import { SecondaryButtonComponent } from '../buttons/secondary-button/secondary-button.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';

type TNavLinks = {
  links: { name: string; href: string }[];
  buttons: { name: string; href: string; behaviour: 'link' | 'button' }[];
};

type TSubLinks = {
  name: string;
  icon: string;
  queryValue: TSectionName;
  description: string;
}[];

type TSectionName = 'marketing' | 'vente' | 'facturation' | 'tresorie';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // PrimaryButtonComponent,
    // SecondaryButtonComponent,
    RouterModule,
    NgClass,
  ],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent implements AfterViewInit, OnInit {
  @ViewChild('headerElement') headerElement!: ElementRef<HTMLElement>;
  @ViewChild('progressBarElement')
  progressBarElement!: ElementRef<HTMLDivElement>;

  router = inject(Router);
  currentRoute: WritableSignal<string> = signal('');

  isServicesLinksOpen = false;
  timeout?: NodeJS.Timeout;
  isNavOpen = false;

  subLinks: TSubLinks = [
    {
      name: 'marketing',
      icon: 'performance.png',
      queryValue: 'marketing',
      description:
        'Boostez votre entreprise avec une gestion en ligne efficace et performante.',
    },
    {
      name: 'vente',
      icon: 'sell.png',
      queryValue: 'vente',
      description:
        'Accroissez vos revenus en optimisant vos ventes et en améliorant leur efficacité.',
    },
    {
      name: 'facturation',
      icon: 'bill.png',
      queryValue: 'facturation',
      description:
        'Économisez du temps sur la gestion de vos facturations et transactions financières.',
    },
    {
      name: 'trésorie',
      icon: 'contract.png',
      queryValue: 'tresorie',
      description: 'Gérez facilement votre trésorerie au quotidien.',
    },
  ];

  navItems: TNavLinks = {
    links: [
      {
        name: 'Services',
        href: '/services',
      },
      { name: 'Tarification', href: '/pricing' },
      { name: 'A Propos', href: '/about-us' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact-us' },
    ],
    buttons: [
      { name: 'Essai gratuit', href: '/register', behaviour: 'link' },
      //{ name: 'Se connecter', href: '/login', behaviour: 'link' },
    ],
  };

  //onScroll evenet to the window
  @HostListener('window:scroll')
  scrollHandler() {
    this.toggleHeaderBackground();
    this.updateProgressBar();
  }

  //methods
  toggleHeaderBackground() {
    if (typeof window === 'undefined') {
      return;
    }
    const top = window.scrollY;
    if (top > 0) {
      this.headerElement.nativeElement.style.background = '#fff';
      this.headerElement.nativeElement.style.boxShadow =
        'rgba(17, 17, 26, 0.1) 0px 1px 0px';
    } else {
      this.headerElement.nativeElement.style.background = 'transparent';
      this.headerElement.nativeElement.style.boxShadow = 'none';
    }
  }

  updateProgressBar() {
    if (typeof window === 'undefined') {
      return;
    }
    const top = window.scrollY;
    const pageHeight = window.document.body.scrollHeight - window.innerHeight;
    const progressBarWidth = (top / Math.max(1, pageHeight)) * 100;

    if (top > 0) {
      this.progressBarElement.nativeElement.style.opacity = '1';
    } else {
      this.progressBarElement.nativeElement.style.opacity = '0';
    }

    this.progressBarElement.nativeElement.style.width = `${progressBarWidth}%`;
  }

  openServicesLinks() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.isServicesLinksOpen = true;
  }

  closeServicesLinks(withDelay = true) {
    if (withDelay) {
      this.timeout = setTimeout(() => {
        this.isServicesLinksOpen = false;
      }, 400);
      return;
    }

    this.isServicesLinksOpen = false;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  navigateWithQueryParams(queryValue: TSectionName): void {
    this.router.navigate(['/services'], {
      queryParams: queryValue === 'marketing' ? {} : { section: queryValue },
    });
  }

  servicesLinkClickHandler(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.router.navigate(['/services']);
    }
  }

  //hooks
  ngAfterViewInit(): void {
    this.toggleHeaderBackground();
    this.updateProgressBar();
  }

  ngOnInit(): void {
    this.currentRoute.set(this.router.url);

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => {
        if (this.isNavOpen) {
          this.toggleNav();
        }
        this.currentRoute.set(event.urlAfterRedirects);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
  }
}
