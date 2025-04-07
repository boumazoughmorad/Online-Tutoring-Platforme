import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-workspace-user-mobile-menu',
  imports: [NgIf],
  templateUrl: './header-workspace-user-mobile-menu.component.html',
  styleUrl: './header-workspace-user-mobile-menu.component.css'
})
export class HeaderWorkspaceUserMobileMenuComponent {
  ngOnInit(): void {
    this.userProfile =  {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: ''
    };
  }

  mobileMenuOpen = input.required<boolean>() ;
  userProfile !:{    name: string,
    email: string,
    avatar: string}

    logout() {
      // Implement logout logic
      console.log('Logging out...');

    }
}
