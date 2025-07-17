import { CaminoRoute, CaminoStage } from '../types/camino';

// Comprehensive Camino Francés stages with detailed data
const caminoFrancesStages: CaminoStage[] = [
  // Stage 1A: Napoleon Route (Summer)
  {
    id: 'cf-stage-1a',
    routeId: 'camino-frances',
    stageNumber: 1,
    name: 'Saint-Jean-Pied-de-Port – Roncesvalles (Napoleon Route)',
    description: 'The classic Napoleon Route crossing the Pyrenees. Maximum difficulty but spectacular views.',
    distance: 24.2,
    estimatedTime: '7-9 hours',
    difficulty: 'Difficult',
    elevation: { ascent: 1200, descent: 400, highest: 1430, lowest: 170 },
    startPoint: 'Saint-Jean-Pied-de-Port, France',
    endPoint: 'Roncesvalles, Spain',
    terrain: 'Mountain paths, forest trails',
    highlights: ['Napoleon Route', 'Pyrenees crossing', 'Spectacular mountain views'],
    warnings: ['Maximum difficulty - weather dependent', 'Closed in winter'],
    accommodations: [],
    services: []
  },
  // Stage 1B: Valcarlos Route (Winter)
  {
    id: 'cf-stage-1b',
    routeId: 'camino-frances',
    stageNumber: 1,
    name: 'Saint-Jean-Pied-de-Port – Roncesvalles (Valcarlos Route)',
    description: 'The winter alternative via Valcarlos. Safer in bad weather conditions.',
    distance: 23.4,
    estimatedTime: '6-8 hours',
    difficulty: 'Challenging',
    elevation: { ascent: 800, descent: 300, highest: 1057, lowest: 170 },
    startPoint: 'Saint-Jean-Pied-de-Port, France',
    endPoint: 'Roncesvalles, Spain',
    terrain: 'Roads, valley paths',
    highlights: ['Valcarlos valley', 'Safer winter route', 'Border crossing'],
    warnings: ['Mandatory in winter conditions'],
    accommodations: [],
    services: []
  },
  // Continuing stages from Roncesvalles
  {
    id: 'cf-stage-2',
    routeId: 'camino-frances',
    stageNumber: 2,
    name: 'Roncesvalles – Zubiri',
    description: 'Gentle descent through Navarrese countryside and forest paths.',
    distance: 21.4,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 200, descent: 600, highest: 900, lowest: 520 },
    startPoint: 'Roncesvalles',
    endPoint: 'Zubiri',
    terrain: 'Forest paths, village streets',
    highlights: ['Espinal village', 'Erro River valley', 'Magdalena Bridge'],
    warnings: ['Slippery when wet'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-3',
    routeId: 'camino-frances',
    stageNumber: 3,
    name: 'Zubiri – Pamplona',
    description: 'Easy walk to the historic city of Pamplona, famous for the running of the bulls.',
    distance: 20.4,
    estimatedTime: '4-5 hours',
    difficulty: 'Easy',
    elevation: { ascent: 150, descent: 200, highest: 600, lowest: 400 },
    startPoint: 'Zubiri',
    endPoint: 'Pamplona',
    terrain: 'Rural paths, urban streets',
    highlights: ['Pamplona Cathedral', 'Plaza del Castillo', 'Historic old town'],
    warnings: ['Busy city traffic'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-4',
    routeId: 'camino-frances',
    stageNumber: 4,
    name: 'Pamplona – Puente la Reina',
    description: 'Cross the beautiful Navarrese countryside to the historic bridge town.',
    distance: 23.9,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 300, descent: 250, highest: 550, lowest: 346 },
    startPoint: 'Pamplona',
    endPoint: 'Puente la Reina',
    terrain: 'Rural paths, small roads',
    highlights: ['Alto del Perdón windmills', 'Romanesque bridge', 'Pilgrim monument'],
    warnings: ['Exposed sections on Alto del Perdón'],
    accommodations: [],
    services: []
  }
  // Additional stages would continue here...
];

// Comprehensive Camino Portugués stages
const caminoPortuguesCentralStages: CaminoStage[] = [
  {
    id: 'cp-central-1',
    routeId: 'camino-portugues',
    stageNumber: 1,
    name: 'Lisboa – Alpriate',
    description: 'Start of the full Portuguese Camino from the capital city.',
    distance: 21.7,
    estimatedTime: '5-6 hours',
    difficulty: 'Easy',
    elevation: { ascent: 100, descent: 50, highest: 150, lowest: 0 },
    startPoint: 'Lisboa',
    endPoint: 'Alpriate',
    terrain: 'Urban streets, suburban paths',
    highlights: ['Lisbon Cathedral', 'Tagus River views', 'Portuguese countryside'],
    warnings: ['Urban traffic initially'],
    accommodations: [],
    services: []
  },
  {
    id: 'cp-central-17',
    routeId: 'camino-portugues',
    stageNumber: 17,
    name: 'Porto – Vilarinho',
    description: 'Begin from beautiful Porto through coastal and suburban areas.',
    distance: 26.5,
    estimatedTime: '6-7 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 300, descent: 200, highest: 200, lowest: 0 },
    startPoint: 'Porto',
    endPoint: 'Vilarinho',
    terrain: 'City streets, coastal paths',
    highlights: ['Porto Cathedral', 'Matosinhos beach', 'Portuguese culture'],
    warnings: ['Heavy traffic in Porto'],
    accommodations: [],
    services: []
  },
  {
    id: 'cp-central-22',
    routeId: 'camino-portugues',
    stageNumber: 22,
    name: 'Tui – O Porriño',
    description: 'Cross into Spain and begin the Galician section.',
    distance: 18.7,
    estimatedTime: '4-5 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 200, descent: 150, highest: 300, lowest: 50 },
    startPoint: 'Tui',
    endPoint: 'O Porriño',
    terrain: 'Rural paths, small roads',
    highlights: ['Border crossing', 'Santiaguiño chapel', 'Galician countryside'],
    warnings: ['Climb to Santiaguiño chapel'],
    accommodations: [],
    services: []
  }
];

// Camino Portugués Coastal Route stages
const caminoPortuguesCoastalStages: CaminoStage[] = [
  {
    id: 'cp-coastal-1',
    routeId: 'camino-portugues-coastal',
    stageNumber: 1,
    name: 'Porto – Labruge',
    description: 'Start the coastal variant with beautiful Atlantic views.',
    distance: 24.1,
    estimatedTime: '5-6 hours',
    difficulty: 'Easy',
    elevation: { ascent: 150, descent: 100, highest: 100, lowest: 0 },
    startPoint: 'Porto',
    endPoint: 'Labruge',
    terrain: 'Coastal paths, beaches',
    highlights: ['Atlantic coastline', 'Beaches', 'Coastal villages'],
    warnings: ['Limited shade in summer'],
    accommodations: [],
    services: []
  },
  {
    id: 'cp-coastal-4',
    routeId: 'camino-portugues-coastal',
    stageNumber: 4,
    name: 'Marinhas – Viana do Castelo',
    description: 'Beautiful coastal walking to the historic port city.',
    distance: 21.7,
    estimatedTime: '5-6 hours',
    difficulty: 'Easy',
    elevation: { ascent: 100, descent: 100, highest: 80, lowest: 0 },
    startPoint: 'Marinhas',
    endPoint: 'Viana do Castelo',
    terrain: 'Coastal paths, urban streets',
    highlights: ['Historic Viana do Castelo', 'Lima River', 'Coastal views'],
    warnings: ['Medium/low difficulty'],
    accommodations: [],
    services: []
  }
];

// Camino del Norte stages
const caminoDelNorteStages: CaminoStage[] = [
  {
    id: 'cn-stage-1',
    routeId: 'camino-del-norte',
    stageNumber: 1,
    name: 'Irún – San Sebastián-Donostia',
    description: 'Start the northern route with coastal views and Basque culture.',
    distance: 27.5,
    estimatedTime: '6-8 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 871, descent: 800, highest: 300, lowest: 0 },
    startPoint: 'Irún',
    endPoint: 'San Sebastián-Donostia',
    terrain: 'Coastal paths, urban streets',
    highlights: ['Basque coastline', 'San Sebastián bay', 'Monte Igueldo'],
    warnings: ['Significant elevation changes'],
    accommodations: [],
    services: []
  },
  {
    id: 'cn-stage-4',
    routeId: 'camino-del-norte',
    stageNumber: 4,
    name: 'Deba – Markina-Xemein',
    description: 'Mountainous journey with tough climb to Mount Arno summit.',
    distance: 24.5,
    estimatedTime: '7-9 hours',
    difficulty: 'Difficult',
    elevation: { ascent: 800, descent: 600, highest: 600, lowest: 0 },
    startPoint: 'Deba',
    endPoint: 'Markina-Xemein',
    terrain: 'Mountain paths, forest trails',
    highlights: ['Mount Arno summit', 'Basque countryside', 'Mountain views'],
    warnings: ['High difficulty - steep climb and descent'],
    accommodations: [],
    services: []
  }
];

// Camino Primitivo stages
const caminoPrimitivoStages: CaminoStage[] = [
  {
    id: 'cprim-stage-1',
    routeId: 'camino-primitivo',
    stageNumber: 1,
    name: 'Oviedo – Grado',
    description: 'Start the original pilgrim route with continuous elevation changes.',
    distance: 25.2,
    estimatedTime: '6-7 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 430, descent: 600, highest: 500, lowest: 80 },
    startPoint: 'Oviedo',
    endPoint: 'Grado',
    terrain: 'Rural paths, forest trails',
    highlights: ['Oviedo Cathedral', 'Alto del Escamplero', 'Asturian countryside'],
    warnings: ['Continuous elevation changes'],
    accommodations: [],
    services: []
  },
  {
    id: 'cprim-stage-5',
    routeId: 'camino-primitivo',
    stageNumber: 5,
    name: 'Pola de Allande – La Mesa',
    description: 'High difficulty stage crossing Puerto del Palo.',
    distance: 22.8,
    estimatedTime: '7-8 hours',
    difficulty: 'Difficult',
    elevation: { ascent: 600, descent: 400, highest: 1146, lowest: 400 },
    startPoint: 'Pola de Allande',
    endPoint: 'La Mesa',
    terrain: 'Mountain paths, high altitude',
    highlights: ['Puerto del Palo', 'Mountain vistas', 'Remote countryside'],
    warnings: ['High difficulty - significant elevation gain'],
    accommodations: [],
    services: []
  },
  {
    id: 'cprim-stage-6',
    routeId: 'camino-primitivo',
    stageNumber: 6,
    name: 'La Mesa – Grandas de Salime',
    description: 'Short but intense stage with major descent.',
    distance: 16.8,
    estimatedTime: '4-5 hours',
    difficulty: 'Challenging',
    elevation: { ascent: 900, descent: 1200, highest: 1100, lowest: 200 },
    startPoint: 'La Mesa',
    endPoint: 'Grandas de Salime',
    terrain: 'Mountain descent, rural paths',
    highlights: ['Dramatic 8km descent', 'Grandas de Salime reservoir', 'Mountain views'],
    warnings: ['Steep 8km descent - hard on knees'],
    accommodations: [],
    services: []
  }
];

export const caminoRoutes: CaminoRoute[] = [
  {
    id: 'camino-frances',
    name: 'Camino Francés',
    nameEs: 'Camino Francés',
    description: 'The most popular and well-established route, rich in history and infrastructure. Perfect for first-time pilgrims.',
    distance: 764,
    estimatedDays: 33,
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
    name: 'Camino Português Central',
    nameEs: 'Camino Portugués Central',
    description: 'Central route from Lisbon or Porto through beautiful Portuguese countryside and historic towns.',
    distance: 620,
    estimatedDays: 27,
    difficulty: 'Easy',
    startLocation: 'Lisboa or Porto, Portugal',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Historic Porto and Lisbon',
      'Portuguese hospitality',
      'Charming medieval towns',
      'Less crowded than Francés',
      'Rich cultural heritage'
    ],
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    stages: caminoPortuguesCentralStages
  },
  {
    id: 'camino-portugues-coastal',
    name: 'Camino Português Coastal',
    nameEs: 'Camino Portugués Costero',
    description: 'Beautiful coastal variant from Porto with stunning Atlantic Ocean views and beach walking.',
    distance: 280,
    estimatedDays: 13,
    difficulty: 'Easy',
    startLocation: 'Porto, Portugal',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Atlantic coastline',
      'Beach walking sections',
      'Coastal Portuguese towns',
      'Fresh seafood',
      'Easier terrain'
    ],
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    stages: caminoPortuguesCoastalStages
  },
  {
    id: 'camino-del-norte',
    name: 'Camino del Norte',
    nameEs: 'Camino del Norte',
    description: 'The spectacular northern coastal route with dramatic cliffs, beaches, and demanding mountain sections.',
    distance: 825,
    estimatedDays: 35,
    difficulty: 'Challenging',
    startLocation: 'Irún, Spain',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Stunning Atlantic coastline',
      'Basque and Asturian culture',
      'Dramatic cliff-top walking',
      'Excellent seafood',
      'Picos de Europa views'
    ],
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    stages: caminoDelNorteStages
  },
  {
    id: 'camino-primitivo',
    name: 'Camino Primitivo',
    nameEs: 'Camino Primitivo',
    description: 'The original route taken by King Alfonso II in the 9th century. Mountainous, challenging, and deeply spiritual.',
    distance: 320,
    estimatedDays: 14,
    difficulty: 'Difficult',
    startLocation: 'Oviedo, Spain',
    endLocation: 'Santiago de Compostela, Spain',
    highlights: [
      'Original pilgrim route (9th century)',
      'Demanding mountainous terrain',
      'Fewer pilgrims - solitude',
      'Deep spiritual experience',
      'Pristine Asturian landscapes'
    ],
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    stages: caminoPrimitivoStages
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