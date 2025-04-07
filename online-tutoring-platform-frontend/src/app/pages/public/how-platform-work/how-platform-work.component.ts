import { Component } from '@angular/core';
import {HowPlatformWorkHeaderComponent} from './ui/how-platform-work-header/how-platform-work-header.component';
import { HowPlatformWorkStepsComponent } from "./ui/how-platform-work-steps/how-platform-work-steps.component";
import { HowPlatformWorkFeatureComponent } from "./ui/how-platform-work-feature/how-platform-work-feature.component";
import { HowPlatformWorkTestimonialComponent } from './ui/how-platform-work-testimonial/how-platform-work-testimonial.component';
import { HowPlatformWorkCtaComponent } from './ui/how-platform-work-cta/how-platform-work-cta.component';

@Component({
  selector: 'app-how-platform-work',
  imports: [HowPlatformWorkHeaderComponent,
    HowPlatformWorkStepsComponent,
    HowPlatformWorkStepsComponent, 
    HowPlatformWorkFeatureComponent,
  HowPlatformWorkFeatureComponent,
  HowPlatformWorkTestimonialComponent,
  HowPlatformWorkCtaComponent
],
  templateUrl: './how-platform-work.component.html',
  styleUrl: './how-platform-work.component.css'
})
export class HowPlatformWorkComponent {

}
