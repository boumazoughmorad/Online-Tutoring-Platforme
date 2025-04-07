import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderWorkspaceUserComponent } from '../../shared/components/header-workspace-user/header-workspace-user.component';
import { FooterWorkspaceUserComponent } from '../../shared/components/footer-workspace-user/footer-workspace-user.component';


@Component({
  selector: 'app-workspace',
  imports: [RouterOutlet, HeaderWorkspaceUserComponent, FooterWorkspaceUserComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {

}
