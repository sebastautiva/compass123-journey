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

// Sample coordinates for the main Camino routes
const routeCoordinates = {
  'camino-frances': [
    [43.1619, -1.2362], // Saint-Jean-Pied-de-Port
    [43.0099, -1.3202], // Roncesvalles
    [42.8734, -1.6668], // Pamplona
    [42.4627, -2.4449], // Estella
    [42.4194, -2.9285], // Los Arcos
    [42.6727, -3.3378], // Logroño
    [42.6151, -3.7774], // Nájera
    [42.6413, -4.2344], // Santo Domingo de la Calzada
    [42.6081, -4.7549], // Belorado
    [42.5538, -5.2808], // San Juan de Ortega
    [42.3438, -5.6722], // Burgos
    [42.2406, -5.9644], // Hornillos del Camino
    [42.1644, -6.2853], // Castrojeriz
    [42.0954, -6.5893], // Frómista
    [42.1186, -6.8679], // Carrión de los Condes
    [42.1598, -7.2059], // Sahagún
    [42.2085, -7.5583], // El Burgo Ranero
    [42.2388, -7.8574], // Mansilla de las Mulas
    [42.2687, -8.1445], // León
    [42.2954, -8.4244], // San Martín del Camino
    [42.3318, -8.7185], // Astorga
    [42.4094, -9.0574], // Foncebadón
    [42.4854, -9.3744], // Ponferrada
    [42.5481, -9.6878], // Villafranca del Bierzo
    [42.6187, -9.9744], // O Cebreiro
    [42.6574, -10.2574], // Sarria
    [42.7054, -10.5387], // Portomarin
    [42.7587, -10.8244], // Palas de Rei
    [42.8154, -11.1087], // Arzúa
    [42.8687, -11.3744], // O Pedrouzo
    [42.8805, -8.5574]  // Santiago de Compostela
  ],
  'camino-portugues': [
    [41.1579, -8.6291], // Porto
    [41.2874, -8.6854], // Matosinhos
    [41.4187, -8.7544], // Vila do Conde
    [41.5987, -8.8244], // Póvoa de Varzim
    [41.7544, -8.8987], // Esposende
    [41.8987, -8.9544], // Viana do Castelo
    [42.0187, -9.0244], // Caminha
    [42.1387, -9.1544], // Valença
    [42.2587, -9.2244], // Tui
    [42.3787, -9.3044], // Redondela
    [42.4987, -9.3844], // Pontevedra
    [42.6187, -9.4644], // Caldas de Reis
    [42.7387, -9.5444], // Padrón
    [42.8805, -8.5574]  // Santiago de Compostela
  ],
  'camino-del-norte': [
    [43.3187, -1.9744], // Irún
    [43.3087, -2.0944], // San Sebastián
    [43.2887, -2.3244], // Zarautz
    [43.2687, -2.5544], // Deba
    [43.2487, -2.7844], // Markina-Xemein
    [43.2287, -3.0144], // Gernika
    [43.2087, -3.2444], // Bilbao
    [43.1887, -3.4744], // Portugalete
    [43.1687, -3.7044], // Castro Urdiales
    [43.1487, -3.9344], // Laredo
    [43.1287, -4.1644], // Santander
    [43.1087, -4.3944], // Santillana del Mar
    [43.0887, -4.6244], // Comillas
    [43.0687, -4.8544], // San Vicente de la Barquera
    [43.0487, -5.0844], // Llanes
    [43.0287, -5.3144], // Ribadesella
    [43.0087, -5.5444], // Villaviciosa
    [42.9887, -5.7744], // Gijón
    [42.9687, -5.9744], // Avilés
    [42.9487, -6.2744], // Muros de Nalón
    [42.9287, -6.5744], // Soto de Luiña
    [42.9087, -6.8744], // Cadavedo
    [42.8887, -7.1744], // Luarca
    [42.8687, -7.4744], // La Caridad
    [42.8487, -7.7744], // Ribadeo
    [42.8287, -8.0744], // Lourenzá
    [42.8087, -8.3744], // Mondoñedo
    [42.7887, -8.6744], // Vilalba
    [42.7687, -8.9744], // Baamonde
    [42.7487, -9.2744], // Miraz
    [42.7287, -9.5744], // Sobrado dos Monxes
    [42.7087, -9.8744], // Arzúa
    [42.8805, -8.5574]  // Santiago de Compostela
  ],
  'camino-primitivo': [
    [43.3587, -5.8444], // Oviedo
    [43.2387, -6.0744], // Grado
    [43.1187, -6.3044], // Salas
    [42.9987, -6.5344], // Tineo
    [42.8787, -6.7644], // Pola de Allande
    [42.7587, -6.9944], // Berducedo
    [42.6387, -7.2244], // Grandas de Salime
    [42.5187, -7.4544], // Fonsagrada
    [42.3987, -7.6844], // O Cádavo
    [42.2787, -7.9144], // Lugo
    [42.1587, -8.1444], // San Romão da Retorta
    [42.0387, -8.3744], // Melide
    [41.9187, -8.6044], // Arzúa
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