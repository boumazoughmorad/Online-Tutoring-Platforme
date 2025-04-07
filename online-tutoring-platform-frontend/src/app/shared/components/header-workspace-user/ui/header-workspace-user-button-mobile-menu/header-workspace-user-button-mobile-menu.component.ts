import { Component, input, output } from '@angular/core';
import { IconComponent } from '../../../icon/icon.component';

@Component({
  selector: 'app-header-workspace-user-button-mobile-menu',
  imports: [IconComponent],
  templateUrl: './header-workspace-user-button-mobile-menu.component.html',
  styleUrl: './header-workspace-user-button-mobile-menu.component.css'
})
export class HeaderWorkspaceUserButtonMobileMenuComponent {

  toggleMobileMenu = output<void>()
  mobileMenuOpen = input.required<boolean>()
}
