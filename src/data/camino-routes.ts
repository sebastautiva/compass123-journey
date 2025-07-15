import { CaminoRoute, CaminoStage, Accommodation, Service } from '../types/camino';

const caminoFrancesStages: CaminoStage[] = [
  {
    id: 'cf-stage-1',
    routeId: 'camino-frances',
    stageNumber: 1,
    name: 'Saint-Jean-Pied-de-Port to Roncesvalles',
    description: 'The classic starting point crossing the Pyrenees into Spain. A challenging but rewarding first day.',
    distance: 25,
    estimatedTime: '7-9 hours',
    difficulty: 'Challenging',
    elevation: {
      ascent: 1200,
      descent: 400,
      highest: 1430,
      lowest: 170
    },
    startPoint: 'Saint-Jean-Pied-de-Port, France',
    endPoint: 'Roncesvalles, Spain',
    terrain: 'Mountain paths, forest trails, some road walking',
    highlights: [
      'Historic Napoleon Route',
      'Spectacular Pyrenees views',
      'Border crossing into Spain',
      'Roncesvalles monastery'
    ],
    warnings: [
      'Weather can change quickly',
      'Steep ascent requires good fitness',
      'Limited services between towns'
    ],
    accommodations: [
      {
        id: 'roncesvalles-albergue',
        name: 'Roncesvalles Albergue',
        type: 'Albergue',
        priceRange: 'Budget',
        priceEur: 15,
        capacity: 180,
        amenities: ['Communal kitchen', 'Laundry', 'Wi-Fi', 'Heating'],
        contact: {
          phone: '+34 948 760 000'
        },
        location: {
          address: 'Calle Única, 31650 Roncesvalles, Navarra'
        },
        rating: 4.2,
        seniorFriendly: true
      }
    ],
    services: [
      {
        id: 'roncesvalles-restaurant',
        name: 'Casa Sabina',
        type: 'Restaurant',
        description: 'Traditional Navarrese cuisine',
        hours: '12:00-23:00',
        contact: {
          phone: '+34 948 760 012'
        }
      }
    ]
  },
  {
    id: 'cf-stage-2',
    routeId: 'camino-frances',
    stageNumber: 2,
    name: 'Roncesvalles to Zubiri',
    description: 'A gentle descent through beautiful Navarrese countryside and charming villages.',
    distance: 22,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: {
      ascent: 200,
      descent: 600,
      highest: 900,
      lowest: 520
    },
    startPoint: 'Roncesvalles, Spain',
    endPoint: 'Zubiri, Spain',
    terrain: 'Forest paths, village streets, some road sections',
    highlights: [
      'Espinal village',
      'Erro River valley',
      'Traditional Basque architecture',
      'Magdalena Bridge in Zubiri'
    ],
    warnings: [
      'Wet conditions can make paths slippery',
      'Limited food options mid-stage'
    ],
    accommodations: [
      {
        id: 'zubiri-albergue',
        name: 'Albergue Zubiri',
        type: 'Albergue',
        priceRange: 'Budget',
        priceEur: 12,
        capacity: 64,
        amenities: ['Kitchen', 'Laundry', 'Garden', 'Wi-Fi'],
        contact: {
          phone: '+34 948 304 329'
        },
        location: {
          address: 'Calle San Esteban, 31630 Zubiri, Navarra'
        },
        rating: 4.0,
        seniorFriendly: true
      }
    ],
    services: [
      {
        id: 'zubiri-cafe',
        name: 'Café Zubiri',
        type: 'Cafe',
        description: 'Coffee and light meals',
        hours: '07:00-22:00'
      }
    ]
  }
];

const caminoPortuguesStages: CaminoStage[] = [
  {
    id: 'cp-stage-1',
    routeId: 'camino-portugues',
    stageNumber: 1,
    name: 'Porto to Vilarinho',
    description: 'Start your Portuguese journey from beautiful Porto through suburban areas.',
    distance: 28,
    estimatedTime: '6-7 hours',
    difficulty: 'Moderate',
    elevation: {
      ascent: 300,
      descent: 200,
      highest: 200,
      lowest: 0
    },
    startPoint: 'Porto Cathedral, Portugal',
    endPoint: 'Vilarinho, Portugal',
    terrain: 'City streets, suburban roads, some countryside',
    highlights: [
      'Porto Cathedral',
      'Matosinhos beach',
      'Traditional Portuguese villages',
      'Coastal views'
    ],
    warnings: [
      'Heavy urban traffic initially',
      'Limited shade in summer'
    ],
    accommodations: [
      {
        id: 'vilarinho-albergue',
        name: 'Albergue Vilarinho',
        type: 'Albergue',
        priceRange: 'Budget',
        priceEur: 10,
        capacity: 40,
        amenities: ['Kitchen', 'Laundry', 'Wi-Fi'],
        contact: {
          phone: '+351 252 681 204'
        },
        location: {
          address: 'Rua Principal, Vilarinho'
        },
        rating: 3.8,
        seniorFriendly: true
      }
    ],
    services: [
      {
        id: 'vilarinho-restaurant',
        name: 'Restaurante O Caminho',
        type: 'Restaurant',
        description: 'Traditional Portuguese cuisine',
        hours: '12:00-22:00'
      }
    ]
  }
];

export const caminoRoutes: CaminoRoute[] = [
  {
    id: 'camino-frances',
    name: 'Camino Francés',
    nameEs: 'Camino Francés',
    description: 'The most popular and well-established route, rich in history and infrastructure. Perfect for first-time pilgrims.',
    distance: 800,
    estimatedDays: 35,
    difficulty: 'Moderate',
    startLocation: 'Saint-Jean-Pied-de-Port, France',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Historic monasteries and cathedrals',
      'Crossing the Pyrenees',
      'Meseta plateau experience',
      'Excellent infrastructure',
      'International pilgrim community'
    ],
    bestMonths: ['April', 'May', 'September', 'October'],
    stages: caminoFrancesStages
  },
  {
    id: 'camino-portugues',
    name: 'Camino Português',
    nameEs: 'Camino Portugués',
    description: 'A beautiful coastal and inland route starting from Porto. Less crowded with stunning Portuguese culture.',
    distance: 620,
    estimatedDays: 27,
    difficulty: 'Easy',
    startLocation: 'Porto, Portugal',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Porto\'s historic center',
      'Coastal walking sections',
      'Portuguese hospitality',
      'Charming medieval towns',
      'Less crowded than Francés'
    ],
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    stages: caminoPortuguesStages
  },
  {
    id: 'camino-del-norte',
    name: 'Camino del Norte',
    nameEs: 'Camino del Norte',
    description: 'The spectacular northern coastal route with dramatic cliffs and beaches. More challenging but incredibly scenic.',
    distance: 825,
    estimatedDays: 36,
    difficulty: 'Challenging',
    startLocation: 'Irun, Spain',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Stunning Atlantic coastline',
      'Basque and Asturian culture',
      'Dramatic cliff-top walking',
      'Excellent seafood',
      'Picos de Europa mountains'
    ],
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    stages: [] // Would be populated with actual stages
  },
  {
    id: 'camino-primitivo',
    name: 'Camino Primitivo',
    nameEs: 'Camino Primitivo',
    description: 'The original route taken by King Alfonso II. Mountainous and challenging but deeply spiritual.',
    distance: 320,
    estimatedDays: 14,
    difficulty: 'Difficult',
    startLocation: 'Oviedo, Spain',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Original pilgrim route',
      'Mountainous terrain',
      'Fewer pilgrims',
      'Deep spiritual experience',
      'Asturian culture'
    ],
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    stages: [] // Would be populated with actual stages
  }
];

export const findRouteById = (id: string): CaminoRoute | undefined => {
  return caminoRoutes.find(route => route.id === id);
};

export const findStageById = (stageId: string): CaminoStage | undefined => {
  for (const route of caminoRoutes) {
    const stage = route.stages.find(s => s.id === stageId);
    if (stage) return stage;
  }
  return undefined;
};