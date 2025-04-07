// about-us.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderComponent } from './ui/about-header/about-header.component';
import { AboutOurStoryComponent } from "./ui/about-our-story/about-our-story.component";
import { AboutOurValuesComponent } from './ui/about-our-values/about-our-values.component';
import { AboutOurTeamComponent } from "./ui/about-our-team/about-our-team.component";
import { AboutMilestonesComponent } from "./ui/about-milestones/about-milestones.component";
import { AboutCtaComponent } from "./ui/about-cta/about-cta.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,
    AboutHeaderComponent,
    AboutOurStoryComponent,
    AboutOurStoryComponent,
    AboutOurValuesComponent,
    AboutOurTeamComponent,
    AboutOurTeamComponent,
    AboutMilestonesComponent,
    AboutMilestonesComponent, 
    AboutCtaComponent,
    AboutCtaComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {



}