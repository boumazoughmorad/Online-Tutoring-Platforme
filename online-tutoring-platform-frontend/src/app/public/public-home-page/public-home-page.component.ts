import { Component } from '@angular/core';
import {PresentationSectionComponent} from './ui/presentation-section/presentation-section.component';
import {MetricsComponent} from './ui/metrics/metrics.component';
import { FeedbackUsersComponent } from './ui/feedback-users/feedback-users.component';
import { AdvantagePlatformComponent } from './ui/advantage-platform/advantage-platform.component';


@Component({
  selector: 'app-public-home-page',
  imports: [PresentationSectionComponent,MetricsComponent,FeedbackUsersComponent,AdvantagePlatformComponent],
  templateUrl: './public-home-page.component.html',
  styleUrl: './public-home-page.component.css'
})
export class PublicHomePageComponent {

}
