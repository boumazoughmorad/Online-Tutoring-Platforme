import { Component } from '@angular/core';
import { FooterWorkspaceUserLogoAndAboutComponent } from "./ui/footer-workspace-user-logo-and-about/footer-workspace-user-logo-and-about.component";
import { FooterWorkspaceUserQuickLinksComponent } from "./ui/footer-workspace-user-quick-links/footer-workspace-user-quick-links.component";
import { FooterWorkspaceUserSupportComponent } from "./ui/footer-workspace-user-support/footer-workspace-user-support.component";
import { FooterWorkspaceUserSubjectsComponent } from "./ui/footer-workspace-user-subjects/footer-workspace-user-subjects.component";
import { FooterWorkspaceUserNewsletterComponent } from "./ui/footer-workspace-user-newsletter/footer-workspace-user-newsletter.component";
import { FooterWorkspaceUserBottomBarComponent } from "./ui/footer-workspace-user-bottom-bar/footer-workspace-user-bottom-bar.component";

@Component({
  selector: 'app-footer-workspace-user',
  imports: [FooterWorkspaceUserLogoAndAboutComponent, 
    FooterWorkspaceUserQuickLinksComponent, 
    FooterWorkspaceUserSupportComponent, 
    FooterWorkspaceUserSubjectsComponent, 
    FooterWorkspaceUserNewsletterComponent, 
    FooterWorkspaceUserBottomBarComponent],
  templateUrl: './footer-workspace-user.component.html',
  styleUrl: './footer-workspace-user.component.css'
})
export class FooterWorkspaceUserComponent {

}
