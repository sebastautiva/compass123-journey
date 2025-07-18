import { CaminoRoute, CaminoStage } from '../types/camino';

// Function to map difficulty rating (1-5) to difficulty name
const getDifficultyName = (rating: number): 'Easy' | 'Moderate' | 'Challenging' | 'Difficult' => {
  if (rating === 1) return 'Easy';
  if (rating === 2) return 'Moderate';
  if (rating === 3) return 'Challenging';
  return 'Difficult';
};

// Comprehensive Camino Francés stages with detailed data from user specifications
const caminoFrancesStages: CaminoStage[] = [
  // Stage 1A: Napoleon Route (Summer)
  {
    id: 'cf-stage-1a',
    routeId: 'camino-frances',
    stageNumber: 1,
    name: 'Saint-Jean-Pied-de-Port – Roncesvalles (Napoleon Route)',
    description: 'The classic Napoleon Route crossing the Pyrenees. Maximum difficulty but spectacular mountain views.',
    distance: 24.2,
    estimatedTime: '7-9 hours',
    difficulty: 'Difficult',
    elevation: { ascent: 1200, descent: 400, highest: 1430, lowest: 170 },
    startPoint: 'Saint-Jean-Pied-de-Port',
    endPoint: 'Roncesvalles',
    terrain: 'Mountain paths, forest trails',
    highlights: ['Napoleon Route', 'Pyrenees crossing', 'Spectacular mountain views', 'Border crossing into Spain'],
    warnings: ['Maximum difficulty - weather dependent', 'Closed in winter conditions', 'Early start recommended'],
    accommodations: [],
    services: []
  },
  // Stage 1B: Valcarlos Route (Winter alternative)
  {
    id: 'cf-stage-1b',
    routeId: 'camino-frances',
    stageNumber: 1,
    name: 'Saint-Jean-Pied-de-Port – Roncesvalles (Valcarlos Route)',
    description: 'The winter alternative via Valcarlos. Safer route in bad weather conditions.',
    distance: 23.4,
    estimatedTime: '6-8 hours',
    difficulty: 'Challenging',
    elevation: { ascent: 800, descent: 300, highest: 1057, lowest: 170 },
    startPoint: 'Saint-Jean-Pied-de-Port',
    endPoint: 'Roncesvalles',
    terrain: 'Roads, valley paths',
    highlights: ['Valcarlos village', 'Border crossing', 'Safer winter route'],
    warnings: ['Mandatory in winter conditions', 'More road walking'],
    accommodations: [],
    services: []
  },
  // Stage 2: Roncesvalles to Zubiri
  {
    id: 'cf-stage-2',
    routeId: 'camino-frances',
    stageNumber: 2,
    name: 'Roncesvalles – Zubiri',
    description: 'Gentle descent through beautiful Navarrese countryside and ancient forest paths.',
    distance: 21.4,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 200, descent: 600, highest: 900, lowest: 520 },
    startPoint: 'Roncesvalles',
    endPoint: 'Zubiri',
    terrain: 'Forest paths, village streets',
    highlights: ['Collegiate Church of Roncesvalles', 'Espinal village', 'Alto de Mezquiriz', 'Erro River'],
    warnings: ['Slippery forest paths when wet', 'Some steep descents'],
    accommodations: [],
    services: []
  },
  // Stage 3: Zubiri to Pamplona
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
    highlights: ['Pamplona Cathedral', 'Plaza del Castillo', 'Historic old town', 'City walls'],
    warnings: ['Busy city traffic approaching Pamplona'],
    accommodations: [],
    services: []
  },
  // Stage 4: Pamplona to Puente la Reina
  {
    id: 'cf-stage-4',
    routeId: 'camino-frances',
    stageNumber: 4,
    name: 'Pamplona – Puente la Reina',
    description: 'Cross the beautiful Navarrese countryside to the historic bridge town where routes converge.',
    distance: 23.9,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 300, descent: 250, highest: 550, lowest: 346 },
    startPoint: 'Pamplona',
    endPoint: 'Puente la Reina',
    terrain: 'Rural paths, small roads',
    highlights: ['Alto del Perdón windmills', 'Romanesque bridge', 'Pilgrim monument', 'Route convergence point'],
    warnings: ['Exposed sections on Alto del Perdón', 'Wind exposure'],
    accommodations: [],
    services: []
  },
  // Stage 5: Puente la Reina to Estella
  {
    id: 'cf-stage-5',
    routeId: 'camino-frances',
    stageNumber: 5,
    name: 'Puente la Reina – Estella',
    description: 'Pleasant walk through vineyards and olive groves to the wine town of Estella.',
    distance: 21.6,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 250, descent: 200, highest: 450, lowest: 346 },
    startPoint: 'Puente la Reina',
    endPoint: 'Estella',
    terrain: 'Country paths, vineyards',
    highlights: ['Mañeru village', 'Cirauqui Roman bridge', 'Estella old town', 'Palace of the Kings of Navarre'],
    warnings: ['Limited shade on hot days'],
    accommodations: [],
    services: []
  },
  // Stage 6: Estella to Los Arcos
  {
    id: 'cf-stage-6',
    routeId: 'camino-frances',
    stageNumber: 6,
    name: 'Estella – Los Arcos',
    description: 'Walk through rural Navarre with its characteristic small towns and agricultural landscape.',
    distance: 21.3,
    estimatedTime: '5-6 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 200, descent: 180, highest: 500, lowest: 380 },
    startPoint: 'Estella',
    endPoint: 'Los Arcos',
    terrain: 'Rural paths, small roads',
    highlights: ['Ayegui monastery', 'Irache wine fountain', 'Los Arcos church', 'Rural Navarre landscape'],
    warnings: ['Long stretches with little shade'],
    accommodations: [],
    services: []
  },
  // Stage 7: Los Arcos to Logroño
  {
    id: 'cf-stage-7',
    routeId: 'camino-frances',
    stageNumber: 7,
    name: 'Los Arcos – Logroño',
    description: 'Cross into La Rioja wine region, entering the famous wine capital of Logroño.',
    distance: 27.6,
    estimatedTime: '6-7 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 150, descent: 200, highest: 450, lowest: 384 },
    startPoint: 'Los Arcos',
    endPoint: 'Logroño',
    terrain: 'Rural paths, vineyards',
    highlights: ['Torres del Río church', 'Viana town walls', 'Entry into La Rioja', 'Logroño old town'],
    warnings: ['Longer stage', 'Limited water sources'],
    accommodations: [],
    services: []
  },
  // Stage 8: Logroño to Nájera
  {
    id: 'cf-stage-8',
    routeId: 'camino-frances',
    stageNumber: 8,
    name: 'Logroño – Nájera',
    description: 'Walk through the heart of La Rioja wine country with extensive vineyards.',
    distance: 29.0,
    estimatedTime: '6-7 hours',
    difficulty: 'Moderate',
    elevation: { ascent: 180, descent: 150, highest: 500, lowest: 384 },
    startPoint: 'Logroño',
    endPoint: 'Nájera',
    terrain: 'Vineyards, rural paths',
    highlights: ['Navarrete ceramics', 'Ventosa village', 'Nájera monastery', 'Rioja vineyards'],
    warnings: ['Longer stage', 'Exposure in vineyard areas'],
    accommodations: [],
    services: []
  },
  // Stage 9: Nájera to Santo Domingo de la Calzada
  {
    id: 'cf-stage-9',
    routeId: 'camino-frances',
    stageNumber: 9,
    name: 'Nájera – Santo Domingo de la Calzada',
    description: 'Easy walk to the historic town famous for its cathedral and the miracle of the chickens.',
    distance: 20.7,
    estimatedTime: '4-5 hours',
    difficulty: 'Easy',
    elevation: { ascent: 100, descent: 80, highest: 630, lowest: 500 },
    startPoint: 'Nájera',
    endPoint: 'Santo Domingo de la Calzada',
    terrain: 'Gentle countryside, small roads',
    highlights: ['Azofra village', 'Santo Domingo Cathedral', 'Famous chicken coop', 'Historic town center'],
    warnings: ['Generally easy terrain'],
    accommodations: [],
    services: []
  },
  // Stage 10: Santo Domingo to Belorado
  {
    id: 'cf-stage-10',
    routeId: 'camino-frances',
    stageNumber: 10,
    name: 'Santo Domingo de la Calzada – Belorado',
    description: 'Pleasant walk through small Riojan villages entering the province of Burgos.',
    distance: 22.0,
    estimatedTime: '5-6 hours',
    difficulty: 'Easy',
    elevation: { ascent: 120, descent: 100, highest: 700, lowest: 630 },
    startPoint: 'Santo Domingo de la Calzada',
    endPoint: 'Belorado',
    terrain: 'Rural paths, small villages',
    highlights: ['Grañón village', 'Redecilla del Camino', 'Castildelgado', 'Belorado historic center'],
    warnings: ['Generally straightforward walking'],
    accommodations: [],
    services: []
  },
  // Continue with remaining stages - Stage 11 onwards
  {
    id: 'cf-stage-11',
    routeId: 'camino-frances',
    stageNumber: 11,
    name: 'Belorado – San Juan de Ortega',
    description: 'Cross the Montes de Oca mountains to the historic monastery village.',
    distance: 23.9,
    estimatedTime: '6-7 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 350, descent: 280, highest: 1150, lowest: 770 },
    startPoint: 'Belorado',
    endPoint: 'San Juan de Ortega',
    terrain: 'Mountain paths, forest',
    highlights: ['Tosantos village', 'Villambistia', 'Montes de Oca', 'San Juan de Ortega monastery'],
    warnings: ['Mountain crossing', 'Weather dependent'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-12',
    routeId: 'camino-frances',
    stageNumber: 12,
    name: 'San Juan de Ortega – Burgos',
    description: 'Descent to the historic cathedral city of Burgos.',
    distance: 25.8,
    estimatedTime: '6-7 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 200, descent: 350, highest: 1150, lowest: 856 },
    startPoint: 'San Juan de Ortega',
    endPoint: 'Burgos',
    terrain: 'Forest paths, urban approach',
    highlights: ['Atapuerca archaeological sites', 'Burgos Cathedral', 'Historic city center'],
    warnings: ['Urban navigation in Burgos'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-13',
    routeId: 'camino-frances',
    stageNumber: 13,
    name: 'Burgos – Hornillos del Camino',
    description: 'Leave Burgos and enter the vast Castilian meseta.',
    distance: 20.3,
    estimatedTime: '5-6 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 180, descent: 120, highest: 950, lowest: 856 },
    startPoint: 'Burgos',
    endPoint: 'Hornillos del Camino',
    terrain: 'Plains, rural paths',
    highlights: ['Meseta landscape', 'Tardajos village', 'Hornillos historic church'],
    warnings: ['Limited shade', 'Open exposure'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-14',
    routeId: 'camino-frances',
    stageNumber: 14,
    name: 'Hornillos del Camino – Castrojeriz',
    description: 'Continue across the meseta to the hilltop town of Castrojeriz.',
    distance: 19.9,
    estimatedTime: '5-6 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 200, descent: 150, highest: 950, lowest: 800 },
    startPoint: 'Hornillos del Camino',
    endPoint: 'Castrojeriz',
    terrain: 'Plains, small hills',
    highlights: ['San Bol chapel', 'Castrojeriz ruins', 'Church of Santa María'],
    warnings: ['Exposed meseta walking'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-15',
    routeId: 'camino-frances',
    stageNumber: 15,
    name: 'Castrojeriz – Frómista',
    description: 'Cross the famous Alto de Mostelares and enter Palencia province.',
    distance: 24.7,
    estimatedTime: '6-7 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 200, descent: 280, highest: 900, lowest: 780 },
    startPoint: 'Castrojeriz',
    endPoint: 'Frómista',
    terrain: 'Hills, rural paths',
    highlights: ['Alto de Mostelares', 'Frómista San Martín church', 'Romanesque architecture'],
    warnings: ['Long descent from Alto de Mostelares'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-16',
    routeId: 'camino-frances',
    stageNumber: 16,
    name: 'Frómista – Carrión de los Condes',
    description: 'Easy walking along the Canal de Castilla to this historic town.',
    distance: 18.8,
    estimatedTime: '4-5 hours',
    difficulty: getDifficultyName(1),
    elevation: { ascent: 50, descent: 80, highest: 780, lowest: 830 },
    startPoint: 'Frómista',
    endPoint: 'Carrión de los Condes',
    terrain: 'Flat, canal paths',
    highlights: ['Canal de Castilla', 'Carrión churches', 'Historic town center'],
    warnings: ['Generally easy terrain'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-17',
    routeId: 'camino-frances',
    stageNumber: 17,
    name: 'Carrión de los Condes – Terradillos de los Templarios',
    description: 'Long stage across the meseta with limited services.',
    distance: 26.3,
    estimatedTime: '6-7 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 100, descent: 80, highest: 900, lowest: 830 },
    startPoint: 'Carrión de los Condes',
    endPoint: 'Terradillos de los Templarios',
    terrain: 'Open plains, dirt tracks',
    highlights: ['Calzadilla de la Cueza', 'Ledigos village', 'Meseta solitude'],
    warnings: ['Long stage with limited services', 'Exposure to weather'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-18',
    routeId: 'camino-frances',
    stageNumber: 18,
    name: 'Terradillos de los Templarios – Bercianos del Real Camino',
    description: 'Continue across the plains toward León province.',
    distance: 23.2,
    estimatedTime: '5-6 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 80, descent: 120, highest: 900, lowest: 850 },
    startPoint: 'Terradillos de los Templarios',
    endPoint: 'Bercianos del Real Camino',
    terrain: 'Plains, rural tracks',
    highlights: ['Sahagún historic town', 'Bercianos church'],
    warnings: ['Limited shade on meseta'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-19',
    routeId: 'camino-frances',
    stageNumber: 19,
    name: 'Bercianos del Real Camino – Mansilla de las Mulas',
    description: 'Walk through agricultural lands toward the walls of Mansilla.',
    distance: 26.3,
    estimatedTime: '6-7 hours',
    difficulty: getDifficultyName(2),
    elevation: { ascent: 100, descent: 150, highest: 850, lowest: 800 },
    startPoint: 'Bercianos del Real Camino',
    endPoint: 'Mansilla de las Mulas',
    terrain: 'Rural paths, agricultural land',
    highlights: ['El Burgo Ranero', 'Mansilla medieval walls', 'Historic bridge'],
    warnings: ['Longer stage'],
    accommodations: [],
    services: []
  },
  {
    id: 'cf-stage-20',
    routeId: 'camino-frances',
    stageNumber: 20,
    name: 'Mansilla de las Mulas – León',
    description: 'Easy walk to the beautiful cathedral city of León.',
    distance: 18.5,
    estimatedTime: '4-5 hours',
    difficulty: getDifficultyName(1),
    elevation: { ascent: 50, descent: 100, highest: 800, lowest: 822 },
    startPoint: 'Mansilla de las Mulas',
    endPoint: 'León',
    terrain: 'Rural paths, urban approach',
    highlights: ['León Cathedral', 'Barrio Húmedo', 'Casa Botines', 'San Isidoro basilica'],
    warnings: ['Urban navigation'],
    accommodations: [],
    services: []
  }
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