// about-us.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  teamMembers = [
    {
      id: 1,
      name: 'Morad Boumawough',
      role: 'Fondatrice & CEO',
      bio: 'develppeur full stack java-angular, Expert en développement de programmes éducatifs innovants.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQGd5F9XDqUc_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704225897410?e=1749081600&v=beta&t=UnGuUrD5GhrOwY_T_FgQ3CiZj0wNCq9b4aYK8ZRq8wY'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Directeur Pédagogique',
      bio: 'Expert en développement de programmes éducatifs innovants.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34X8N6Arx6uteXtN6kNoZ_d6NUZjMdBv69g&s'
    },
    {
      id: 3,
      name: 'Fatima Al-Mansoori',
      role: 'Responsable Technologie',
      bio: 'Ingénieure en informatique passionnée par les solutions éducatives.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsR1j5c5rh3Or62MF39b1EffRT1nXnqN4BQ&s'
    }
  ];

  milestones = [
    { year: '2025', event: 'Fondation de la plateforme' },
    { year: '2025', event: 'Premier millier d\'étudiants' },
    { year: '2025', event: 'Expansion internationale' },
    { year: '...', event: 'Lancement de l\'application mobile' },
    { year: '....', event: '50 000 étudiants actifs' }
  ];
}