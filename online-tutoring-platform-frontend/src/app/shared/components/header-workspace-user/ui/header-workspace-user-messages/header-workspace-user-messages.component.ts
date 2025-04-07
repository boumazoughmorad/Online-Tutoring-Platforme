import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../../icon/icon.component';


@Component({
  selector: 'app-header-workspace-user-messages',
  imports: [IconComponent,RouterLink,RouterLinkActive],
  templateUrl: './header-workspace-user-messages.component.html',
  styleUrl: './header-workspace-user-messages.component.css'
})
export class HeaderWorkspaceUserMessagesComponent {

}
