export interface CaminoRoute {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  distance: number;
  estimatedDays: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  startLocation: string;
  endLocation: string;
  highlights: string[];
  bestMonths: string[];
  stages: CaminoStage[];
}

export interface CaminoStage {
  id: string;
  routeId: string;
  stageNumber: number;
  name: string;
  description: string;
  distance: number;
  estimatedTime: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  elevation: {
    ascent: number;
    descent: number;
    highest: number;
    lowest: number;
  };
  startPoint: string;
  endPoint: string;
  terrain: string;
  highlights: string[];
  warnings: string[];
  accommodations: Accommodation[];
  services: Service[];
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'Albergue' | 'Hostal' | 'Hotel' | 'Casa Rural' | 'Pension';
  priceRange: 'Budget' | 'Mid-range' | 'Premium';
  priceEur: number;
  capacity: number;
  amenities: string[];
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  location: {
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  rating?: number;
  seniorFriendly: boolean;
}

export interface Service {
  id: string;
  name: string;
  type: 'Restaurant' | 'Cafe' | 'Grocery' | 'Pharmacy' | 'Medical' | 'Transport' | 'Tourist Info';
  description: string;
  hours?: string;
  contact?: {
    phone?: string;
    address?: string;
  };
}

export interface PilgrimPassport {
  id: string;
  pilgramName: string;
  startDate: string;
  route: string;
  stamps: PassportStamp[];
  notes: string[];
  createdAt: string;
}

export interface PassportStamp {
  stageId: string;
  stageName: string;
  date: string;
  location: string;
  notes?: string;
}

export interface UserItinerary {
  id: string;
  name: string;
  route: CaminoRoute;
  startDate: string;
  endDate: string;
  pace: 'relaxed' | 'moderate' | 'active';
  accommodationPreference: 'budget' | 'comfort' | 'premium';
  restDays: number[];
  customizations: {
    stageId: string;
    modifications: string;
  }[];
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface TravelTip {
  id: string;
  category: 'packing' | 'health' | 'safety' | 'cultural' | 'language' | 'preparation';
  title: string;
  content: string;
  seniorSpecific: boolean;
  importance: 'low' | 'medium' | 'high';
}