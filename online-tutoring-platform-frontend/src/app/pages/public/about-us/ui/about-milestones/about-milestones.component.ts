import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-milestones',
  imports: [CommonModule],
  templateUrl: './about-milestones.component.html',
  styleUrl: './about-milestones.component.css'
})
export class AboutMilestonesComponent {
  milestones = [
    { year: '2025', event: 'Fondation de la plateforme' },
    { year: '2025', event: 'Premier millier d\'étudiants' },
    { year: '2025', event: 'Expansion internationale' },
    { year: '...', event: 'Lancement de l\'application mobile' },
    { year: '....', event: '50 000 étudiants actifs' }
  ];
}
