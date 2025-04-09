import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { UserType } from '../../model/dashboard-user.model';


@Component({
  selector: 'app-dashboard-user-header',
  imports: [NgIf],
  templateUrl: './dashboard-user-header.component.html',
  styleUrl: './dashboard-user-header.component.css'
})
export class DashboardUserHeaderComponent {
  userType: UserType = 'student'; 

}
