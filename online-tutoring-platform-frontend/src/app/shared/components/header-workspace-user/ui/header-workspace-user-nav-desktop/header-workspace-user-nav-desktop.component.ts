import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../../icon/icon.component';


@Component({
  selector: 'app-header-workspace-user-nav-desktop',
  imports: [IconComponent,RouterLink,RouterLinkActive],
  templateUrl: './header-workspace-user-nav-desktop.component.html',
  styleUrl: './header-workspace-user-nav-desktop.component.css'
})
export class HeaderWorkspaceUserNavDesktopComponent {

}
