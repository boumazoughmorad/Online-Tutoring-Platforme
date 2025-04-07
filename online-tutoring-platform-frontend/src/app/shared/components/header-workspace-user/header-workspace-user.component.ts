import { Component, OnInit } from '@angular/core';

import { HeaderWorkspaceUserMobileMenuComponent } from "./ui/header-workspace-user-mobile-menu/header-workspace-user-mobile-menu.component";
import { NotificationBellComponent } from './ui/notification-bell/notification-bell.component';
import { HeaderWorkspaceUserLogoComponent } from "./ui/header-workspace-user-logo/header-workspace-user-logo.component";
import { HeaderWorkspaceUserNavDesktopComponent } from "./ui/header-workspace-user-nav-desktop/header-workspace-user-nav-desktop.component";
import { HeaderWorkpaceUserSearchBarComponent } from "./ui/header-workpace-user-search-bar/header-workpace-user-search-bar.component";
import { HeaderWorkspaceUserMessagesComponent } from "./ui/header-workspace-user-messages/header-workspace-user-messages.component";
import { HeaderWorkspaceUserProfileComponent } from "./ui/header-workspace-user-profile/header-workspace-user-profile.component";
import { HeaderWorkspaceUserButtonMobileMenuComponent } from "./ui/header-workspace-user-button-mobile-menu/header-workspace-user-button-mobile-menu.component";


@Component({
  selector: 'app-header-workspace-user',
  imports: [  HeaderWorkspaceUserMobileMenuComponent,
              NotificationBellComponent,
              HeaderWorkspaceUserLogoComponent,
              HeaderWorkspaceUserNavDesktopComponent,
              HeaderWorkpaceUserSearchBarComponent,
              HeaderWorkspaceUserMessagesComponent,
              HeaderWorkspaceUserProfileComponent,
              HeaderWorkspaceUserButtonMobileMenuComponent
        ],
  templateUrl: './header-workspace-user.component.html',
  styleUrl: './header-workspace-user.component.css'
})
export class HeaderWorkspaceUserComponent implements OnInit{
  ngOnInit(): void {

  }
  mobileMenuOpen = false;

  




  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


}
