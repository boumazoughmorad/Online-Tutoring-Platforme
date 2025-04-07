import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage-platform',
  imports: [NgFor],
  templateUrl: './advantage-platform.component.html',
  styleUrl: './advantage-platform.component.css'
})
export class AdvantagePlatformComponent {
  advantages = [
    {
      icon: '🌍',
      title: 'Accessibilité mondiale',
      description: 'Disponible 24h/24 depuis n\'importe quel pays'
    },
    {
      icon: '⏰',
      title: 'Flexibilité horaire',
      description: 'Cours programmables selon vos disponibilités'
    },
    {
      icon: '🎯',
      title: 'Personnalisation',
      description: 'Parcours d\'apprentissage sur mesure'
    },
    {
      icon: '🏆',
      title: 'Tuteurs certifiés',
      description: 'Professeurs qualifiés et évalués'
    },
    {
      icon: '💰',
      title: 'Économique',
      description: 'Jusqu\'à 60% moins cher que le tutorat traditionnel'
    },
    {
      icon: '🖥️',
      title: 'Technologie innovante',
      description: 'Tableau blanc interactif et outils collaboratifs'
    },
    {
      icon: '🧑🏫',
      title: 'Orientation complète',
      description: 'Scolaire et professionnelle'
    },
    {
      icon: '🔐',
      title: 'Sécurité',
      description: 'Données cryptées et sessions modérées'
    }
  ];

  currentHoveredIndex: number | null = null;
}
