import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../icon/icon.component';


@Component({
  selector: 'app-header-workspace-user-logo',
  imports: [IconComponent,RouterLink],
  templateUrl: './header-workspace-user-logo.component.html',
  styleUrl: './header-workspace-user-logo.component.css'
})
export class HeaderWorkspaceUserLogoComponent {

}
