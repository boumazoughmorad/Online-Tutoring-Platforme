import { Component, OnInit } from '@angular/core';
import { testimonial_howPlatformWork } from '../../model/data';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-how-platform-work-testimonial',
  imports: [IconComponent],
  templateUrl: './how-platform-work-testimonial.component.html',
  styleUrl: './how-platform-work-testimonial.component.css'
})
export class HowPlatformWorkTestimonialComponent implements OnInit{
  testimonial !: { quote: string; author: string; }
      ngOnInit(): void {
        this.testimonial = testimonial_howPlatformWork
      }

}
