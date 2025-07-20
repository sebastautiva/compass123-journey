import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { CaminoRoute } from '../types/camino';

interface RouteMapProps {
  route: CaminoRoute;
  height?: string;
}

// Sample coordinates for the main Camino routes
const routeCoordinates = {
  'camino-frances': [
    [-1.2362, 43.1619], // Saint-Jean-Pied-de-Port
    [-1.3202, 43.0099], // Roncesvalles
    [-1.6668, 42.8734], // Pamplona
    [-2.4449, 42.4627], // Estella
    [-2.9285, 42.4194], // Los Arcos
    [-3.3378, 42.6727], // Logroño
    [-3.7774, 42.6151], // Nájera
    [-4.2344, 42.6413], // Santo Domingo de la Calzada
    [-4.7549, 42.6081], // Belorado
    [-5.2808, 42.5538], // San Juan de Ortega
    [-5.6722, 42.3438], // Burgos
    [-5.9644, 42.2406], // Hornillos del Camino
    [-6.2853, 42.1644], // Castrojeriz
    [-6.5893, 42.0954], // Frómista
    [-6.8679, 42.1186], // Carrión de los Condes
    [-7.2059, 42.1598], // Sahagún
    [-7.5583, 42.2085], // El Burgo Ranero
    [-7.8574, 42.2388], // Mansilla de las Mulas
    [-8.1445, 42.2687], // León
    [-8.4244, 42.2954], // San Martín del Camino
    [-8.7185, 42.3318], // Astorga
    [-9.0574, 42.4094], // Foncebadón
    [-9.3744, 42.4854], // Ponferrada
    [-9.6878, 42.5481], // Villafranca del Bierzo
    [-9.9744, 42.6187], // O Cebreiro
    [-10.2574, 42.6574], // Sarria
    [-10.5387, 42.7054], // Portomarin
    [-10.8244, 42.7587], // Palas de Rei
    [-11.1087, 42.8154], // Arzúa
    [-11.3744, 42.8687], // O Pedrouzo
    [-11.5574, 42.8805]  // Santiago de Compostela
  ],
  'camino-portugues': [
    [-8.6291, 41.1579], // Porto
    [-8.6854, 41.2874], // Matosinhos
    [-8.7544, 41.4187], // Vila do Conde
    [-8.8244, 41.5987], // Póvoa de Varzim
    [-8.8987, 41.7544], // Esposende
    [-8.9544, 41.8987], // Viana do Castelo
    [-9.0244, 42.0187], // Caminha
    [-9.1544, 42.1387], // Valença
    [-9.2244, 42.2587], // Tui
    [-9.3044, 42.3787], // Redondela
    [-9.3844, 42.4987], // Pontevedra
    [-9.4644, 42.6187], // Caldas de Reis
    [-9.5444, 42.7387], // Padrón
    [-11.5574, 42.8805]  // Santiago de Compostela
  ],
  'camino-del-norte': [
    [-1.9744, 43.3187], // Irún
    [-2.0944, 43.3087], // San Sebastián
    [-2.3244, 43.2887], // Zarautz
    [-2.5544, 43.2687], // Deba
    [-2.7844, 43.2487], // Markina-Xemein
    [-3.0144, 43.2287], // Gernika
    [-3.2444, 43.2087], // Bilbao
    [-3.4744, 43.1887], // Portugalete
    [-3.7044, 43.1687], // Castro Urdiales
    [-3.9344, 43.1487], // Laredo
    [-4.1644, 43.1287], // Santander
    [-4.3944, 43.1087], // Santillana del Mar
    [-4.6244, 43.0887], // Comillas
    [-4.8544, 43.0687], // San Vicente de la Barquera
    [-5.0844, 43.0487], // Llanes
    [-5.3144, 43.0287], // Ribadesella
    [-5.5444, 43.0087], // Villaviciosa
    [-5.7744, 42.9887], // Gijón
    [-5.9744, 42.9687], // Avilés
    [-6.2744, 42.9487], // Muros de Nalón
    [-6.5744, 42.9287], // Soto de Luiña
    [-6.8744, 42.9087], // Cadavedo
    [-7.1744, 42.8887], // Luarca
    [-7.4744, 42.8687], // La Caridad
    [-7.7744, 42.8487], // Ribadeo
    [-8.0744, 42.8287], // Lourenzá
    [-8.3744, 42.8087], // Mondoñedo
    [-8.6744, 42.7887], // Vilalba
    [-8.9744, 42.7687], // Baamonde
    [-9.2744, 42.7487], // Miraz
    [-9.5744, 42.7287], // Sobrado dos Monxes
    [-9.8744, 42.7087], // Arzúa
    [-11.5574, 42.8805]  // Santiago de Compostela
  ],
  'camino-primitivo': [
    [-5.8444, 43.3587], // Oviedo
    [-6.0744, 43.2387], // Grado
    [-6.3044, 43.1187], // Salas
    [-6.5344, 42.9987], // Tineo
    [-6.7644, 42.8787], // Pola de Allande
    [-6.9944, 42.7587], // Berducedo
    [-7.2244, 42.6387], // Grandas de Salime
    [-7.4544, 42.5187], // Fonsagrada
    [-7.6844, 42.3987], // O Cádavo
    [-7.9144, 42.2787], // Lugo
    [-8.1444, 42.1587], // San Romão da Retorta
    [-8.3744, 42.0387], // Melide
    [-8.6044, 41.9187], // Arzúa
    [-11.5574, 42.8805]  // Santiago de Compostela
  ]
};

const RouteMap: React.FC<RouteMapProps> = ({ route, height = '400px' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes, using a placeholder token - user should add their own
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE';
    
    const coordinates = routeCoordinates[route.id as keyof typeof routeCoordinates] || [];
    
    if (coordinates.length === 0) return;

    // Calculate bounds for the route
    const bounds = new mapboxgl.LngLatBounds();
    coordinates.forEach(coord => bounds.extend(coord as [number, number]));

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      bounds: bounds,
      fitBoundsOptions: { padding: 50 }
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add route line
      map.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates
          }
        }
      });

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#e11d48',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });

      // Add markers for each stage
      coordinates.forEach((coord, index) => {
        const isStart = index === 0;
        const isEnd = index === coordinates.length - 1;
        
        let markerColor = '#3b82f6'; // blue for intermediate
        if (isStart) markerColor = '#10b981'; // green for start
        if (isEnd) markerColor = '#f59e0b'; // amber for end

        const marker = new mapboxgl.Marker({ color: markerColor })
          .setLngLat(coord as [number, number])
          .addTo(map.current!);

        // Add popup with stage info
        const stageName = route.stages?.[index]?.name || 
          (isStart ? 'Start' : isEnd ? 'Santiago de Compostela' : `Stage ${index + 1}`);
        
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div class="font-semibold">${stageName}</div>`);
        
        marker.setPopup(popup);
      });
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [route]);

  return (
    <div className="w-full">
      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> To display the map, you need to add your Mapbox public token. 
          Get one at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline">mapbox.com</a> 
          and replace 'YOUR_MAPBOX_TOKEN_HERE' in the RouteMap component.
        </p>
      </div>
      <div 
        ref={mapContainer} 
        className="w-full rounded-lg border shadow-lg" 
        style={{ height }}
      />
    </div>
  );
};

export default RouteMap;