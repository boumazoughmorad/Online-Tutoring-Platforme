import { Component, input, OnInit, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../icon/icon.component';


@Component({
  selector: 'app-header-workspace-user-profile',
  imports: [IconComponent,NgIf,RouterLink],
  templateUrl: './header-workspace-user-profile.component.html',
  styleUrl: './header-workspace-user-profile.component.css'
})
export class HeaderWorkspaceUserProfileComponent implements OnInit{
  CloseMobileMenuOpen = output<void>()
  ngOnInit(): void {
    this.userProfile =  {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: ''
    };
  }
  dropdownOpen = false;
  
  userProfile !:{    name: string,
    email: string,
    avatar: string}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
    this.dropdownOpen = false;
     this.CloseMobileMenuOpen.emit();
  }
}
