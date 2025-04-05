import {Category} from './our-service.service';

export   const Categories : Category[] = [
  {
    id: 1,
    categorieName: 'Langues étrangères',
    icon: "assets/icons/langue.png",
    descriptions: [
      {
        id: 1,
        description: 'Apprentissage de multiples langues avec des professeurs natifs'
      },
      {
        id: 2,
        description: 'Cours adaptés à tous les niveaux (débutant à avancé)'
      },
      {
        id: 3,
        description: 'Préparation aux certifications internationales (TOEFL, IELTS, DELF, etc.)'
      }
    ],
    service: [
      {
        id: 1,
        name: "Anglais",
        nombreProf: "+50",
        icon: "assets/icons/englishFlag.png",
        description: "Cours d'anglais général et professionnel"
      },
      {
        id: 2,
        name: "Français",
        nombreProf: "+35",
        icon: "assets/icons/frenchFlag.png",
        description: "Français langue étrangère et perfectionnement"
      },
      {
        id: 3,
        name: "Espagnol",
        nombreProf: "+25",
        icon: "assets/icons/spanishFlag.png",
        description: "Apprentissage de l'espagnol pour tous niveaux"
      },
      {
        id: 4,
        name: "Allemand",
        nombreProf: "+20",
        icon: "assets/icons/germanFlag.png",
        description: "Cours d'allemand avec professeurs certifiés"
      }
    ]
  },
  {
    id: 2,
    categorieName: 'Heures d\'assistance',
    icon: "assets/icons/heureAss.png",
    descriptions: [
      {
        id: 1,
        description: 'Aide immédiate pour vos questions urgentes'
      },
      {
        id: 2,
        description: 'Séances de clarification des points difficiles'
      },
      {
        id: 3,
        description: 'Accompagnement personnalisé en temps réel'
      }
    ],
    service: [
      {
        id: 1,
        name: "Aide aux devoirs",
        nombreProf: "+40",
        icon: "assets/icons/homeworkHelp.png",
        description: "Assistance pour les exercices et projets"
      },
      {
        id: 2,
        name: "Révisions express",
        nombreProf: "+30",
        icon: "assets/icons/quickReview.png",
        description: "Séances intensives avant les examens"
      }
    ]
  },
  {
    id: 3,
    categorieName: 'Cours en ligne - Baccalauréat',
    icon: "assets/icons/CoursEnlign.png",
    descriptions: [
      {
        id: 1,
        description: 'Préparation complète aux épreuves du bac'
      },
      {
        id: 2,
        description: 'Cours couvrant toutes les filières'
      },
      {
        id: 3,
        description: 'Simulations d\'examen et corrections détaillées'
      }
    ],
    service: [
      {
        id: 1,
        name: "Mathématiques",
        nombreProf: "+45",
        icon: "assets/icons/mathIcon.png",
        description: "Algèbre, analyse et géométrie"
      },
      {
        id: 2,
        name: "Philosophie",
        nombreProf: "+25",
        icon: "assets/icons/philosophyIcon.png",
        description: "Méthodologie de la dissertation"
      }
    ]
  },
  {
    id: 4,
    categorieName: 'Orientation scolaire',
    icon: "assets/icons/Orientation.png",
    descriptions: [
      {
        id: 1,
        description: 'Bilan personnalisé de compétences'
      },
      {
        id: 2,
        description: 'Conseils pour choisir sa filière'
      },
      {
        id: 3,
        description: 'Présentation des différentes options d\'études'
      }
    ],
    service: [
      {
        id: 1,
        name: "Bilan d'orientation",
        nombreProf: "+15",
        icon: "assets/icons/orientationTest.png",
        description: "Évaluation des aptitudes et intérêts"
      }
    ]
  },
  {
    id: 5,
    categorieName: 'Orientation professionnelle',
    icon: "assets/icons/OrientationProfessionnelle.png",
    descriptions: [
      {
        id: 1,
        description: 'Conseils pour construire son projet professionnel'
      },
      {
        id: 2,
        description: 'Préparation aux entretiens d\'embauche'
      },
      {
        id: 3,
        description: 'Rédaction de CV et lettres de motivation'
      }
    ],
    service: [
      {
        id: 1,
        name: "Coaching carrière",
        nombreProf: "+20",
        icon: "assets/icons/careerCoach.png",
        description: "Accompagnement professionnel personnalisé"
      }
    ]
  },
  {
    id: 6,
    categorieName: 'Cours en ligne - Enseignement supérieur',
    icon: "assets/icons/CoursEnlign.png",
    descriptions: [
      {
        id: 1,
        description: 'Cours universitaires par des enseignants expérimentés'
      },
      {
        id: 2,
        description: 'Préparation aux concours des grandes écoles'
      },
      {
        id: 3,
        description: 'Soutien dans les matières spécialisées'
      }
    ],
    service: [
      {
        id: 1,
        name: "Médecine",
        nombreProf: "+18",
        icon: "assets/icons/medicineIcon.png",
        description: "Préparation PACES et concours médicaux"
      }
    ]
  },
  {
    id: 7,
    categorieName: 'Cours en ligne - Primaire',
    icon: "assets/icons/CoursEnlign.png",
    descriptions: [
      {
        id: 1,
        description: 'Apprentissage des fondamentaux'
      },
      {
        id: 2,
        description: 'Méthodes pédagogiques adaptées aux enfants'
      },
      {
        id: 3,
        description: 'Suivi personnalisé de la progression'
      }
    ],
    service: [
      {
        id: 1,
        name: "Lecture-Écriture",
        nombreProf: "+30",
        icon: "assets/icons/readingIcon.png",
        description: "Apprentissage des bases en français"
      }
    ]
  },
  {
    id: 8,
    categorieName: 'Cours en ligne - Préparatoire',
    icon: "assets/icons/CoursEnlign.png",
    descriptions: [
      {
        id: 1,
        description: 'Préparation aux examens d\'entrée'
      },
      {
        id: 2,
        description: 'Renforcement des acquis scolaires'
      },
      {
        id: 3,
        description: 'Méthodologie de travail efficace'
      }
    ],
    service: [
      {
        id: 1,
        name: "Maths Prépa",
        nombreProf: "+22",
        icon: "assets/icons/mathPrepIcon.png",
        description: "Programme intensif de mathématiques"
      }
    ]
  }
];
