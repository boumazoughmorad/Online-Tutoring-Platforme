import { Component } from '@angular/core';
import {PresentationSectionComponent} from './ui/presentation-section/presentation-section.component';
import {MetricsComponent} from './ui/metrics/metrics.component';

@Component({
  selector: 'app-public-home-page',
  imports: [PresentationSectionComponent,MetricsComponent],
  templateUrl: './public-home-page.component.html',
  styleUrl: './public-home-page.component.css'
})
export class PublicHomePageComponent {

}
