import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CaminoRoute } from '../types/camino';

interface RouteMapProps {
  route: CaminoRoute;
  height?: string;
}

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample coordinates for the main Camino routes - updated with accurate locations
const routeCoordinates = {
  'camino-frances': [
    [43.1631, -1.2360], // Saint-Jean-Pied-de-Port
    [43.0099, -1.3202], // Roncesvalles
    [42.8911, -1.6470], // Zubiri
    [42.8169, -1.6440], // Pamplona
    [42.6681, -1.8155], // Puente la Reina
    [42.6718, -2.0269], // Estella
    [42.5641, -2.1849], // Los Arcos
    [42.4652, -2.4449], // Logroño
    [42.4164, -2.7315], // Nájera
    [42.4419, -2.9522], // Santo Domingo de la Calzada
    [42.4273, -3.1786], // Belorado
    [42.3658, -3.3845], // San Juan de Ortega
    [42.3436, -3.7037], // Burgos
    [42.2878, -3.9156], // Hornillos del Camino
    [42.2886, -4.1384], // Castrojeriz
    [42.2633, -4.4005], // Frómista
    [42.3377, -4.6028], // Carrión de los Condes
    [42.3377, -4.7768], // Terradillos de los Templarios
    [42.3719, -5.0516], // Bercianos del Real Camino
    [42.5028, -5.4053], // Mansilla de las Mulas
    [42.5987, -5.5671], // León
    [42.5544, -8.0850], // Santiago de Compostela
  ],
  'camino-portugues': [
    [38.7223, -9.1393], // Lisboa
    [38.8632, -9.0950], // Alpriate
    [39.2342, -8.6881], // Azambuja
    [39.2369, -8.6881], // Santarém
    [39.3667, -8.4833], // Golega
    [39.6031, -8.4103], // Tomar
    [39.8411, -8.3850], // Alvaiázere
    [39.9097, -8.4333], // Ansião
    [40.2033, -8.4103], // Coimbra
    [40.3778, -8.4494], // Mealhada
    [40.5643, -8.4394], // Águeda
    [40.6897, -8.4889], // Albergaria-a-Velha
    [40.9014, -8.4944], // São João da Madeira
    [41.0089, -8.5756], // Grijó
    [41.1579, -8.6291], // Porto
    [41.3267, -8.5389], // Vilarinho
    [41.5388, -8.6151], // Barcelos
    [41.7675, -8.5839], // Ponte de Lima
    [41.9092, -8.6417], // Rubiaes
    [42.0471, -8.6446], // Tui (Spain)
    [42.1572, -8.6194], // O Porriño
    [42.2856, -8.6075], // Redondela
    [42.4318, -8.6446], // Pontevedra
    [42.6035, -8.6400], // Caldas de Reis
    [42.7387, -8.6592], // Padrón
    [42.8805, -8.5574]  // Santiago de Compostela
  ],
  'camino-del-norte': [
    [43.3394, -1.7856], // Irún
    [43.3183, -1.9812], // San Sebastián-Donostia
    [43.2831, -2.1699], // Zarautz
    [43.2964, -2.3519], // Deba
    [43.2677, -2.4967], // Markina-Xemein
    [43.3149, -2.6799], // Gernika
    [43.3150, -2.7649], // Lezama
    [43.2627, -2.9349], // Bilbao
    [43.3180, -3.1215], // Portugalete
    [43.3865, -3.2174], // Castro Urdiales
    [43.4107, -3.4208], // Laredo
    [43.4470, -3.6761], // Güemes
    [43.4623, -3.8044], // Santander
    [42.8805, -8.5574]  // Santiago de Compostela
  ],
  'camino-primitivo': [
    [43.3614, -5.8593], // Oviedo
    [43.3920, -6.0728], // Grado
    [43.4016, -6.2535], // Salas
    [43.3394, -6.5215], // Tineo
    [43.2831, -6.8213], // Pola de Allande
    [43.2964, -7.0146], // La Mesa
    [43.1447, -7.2556], // Grandas de Salime
    [43.1256, -7.0726], // Fonsagrada
    [42.9964, -7.3519], // O Cádavo
    [43.0096, -7.5549], // Lugo
    [42.9738, -7.7408], // San Romão da Retorta
    [42.9149, -8.0138], // Melide
    [42.9292, -8.2649], // Arzúa
    [42.8805, -8.5574]  // Santiago de Compostela
  ]
};

// Create custom icons for different marker types
const createIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

const startIcon = createIcon('#10b981'); // green
const endIcon = createIcon('#f59e0b'); // amber
const stageIcon = createIcon('#3b82f6'); // blue

const RouteMap: React.FC<RouteMapProps> = ({ route, height = '400px' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const coordinates = routeCoordinates[route.id as keyof typeof routeCoordinates] || [];
    
    if (coordinates.length === 0) return;

    // Calculate bounds for the route
    const bounds = L.latLngBounds(coordinates as [number, number][]);

    // Initialize map
    map.current = L.map(mapContainer.current, {
      zoomControl: true,
    }).fitBounds(bounds, { padding: [20, 20] });

    // Add OpenStreetMap tile layer (completely free)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add route line
    const routeLine = L.polyline(coordinates as [number, number][], {
      color: '#e11d48',
      weight: 4,
      opacity: 0.8,
      smoothFactor: 1
    }).addTo(map.current);

    // Add markers for each stage
    coordinates.forEach((coord, index) => {
      const isStart = index === 0;
      const isEnd = index === coordinates.length - 1;
      
      let icon = stageIcon;
      if (isStart) icon = startIcon;
      if (isEnd) icon = endIcon;

      const stageName = route.stages?.[index]?.name || 
        (isStart ? 'Start' : isEnd ? 'Santiago de Compostela' : `Stage ${index + 1}`);
      
      const marker = L.marker(coord as [number, number], { icon })
        .addTo(map.current!)
        .bindPopup(`<div class="font-semibold">${stageName}</div>`);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [route]);

  return (
    <div className="w-full">
      <div 
        ref={mapContainer} 
        className="w-full rounded-lg border shadow-lg" 
        style={{ height }}
      />
    </div>
  );
};

export default RouteMap;