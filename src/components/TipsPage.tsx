import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Backpack, 
  Heart, 
  Shield, 
  Globe, 
  MessageSquare, 
  Activity,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Sun,
  Cloud,
  Snowflake,
  Thermometer
} from 'lucide-react';

const tipsData = {
  packing: {
    title: 'Packing for Seniors',
    icon: Backpack,
    tips: [
      {
        title: 'Essential Clothing',
        content: 'Pack 3-4 changes of moisture-wicking clothes, including merino wool base layers. Bring a lightweight rain jacket and pants. Pack one warm layer for evenings.',
        importance: 'high'
      },
      {
        title: 'Comfortable Footwear',
        content: 'Broken-in hiking boots are essential. Pack 2-3 pairs of moisture-wicking socks and consider bringing camp shoes for evenings.',
        importance: 'high'
      },
      {
        title: 'Senior-Specific Items',
        content: 'Bring a lightweight camping chair, compression socks, extra cushioned insoles, and a small pillow for better sleep comfort.',
        importance: 'medium'
      },
      {
        title: 'Medications & Health',
        content: 'Pack all medications in original containers, bring a basic first aid kit, and carry copies of prescriptions. Include blister treatment supplies.',
        importance: 'high'
      },
      {
        title: 'Electronics & Documents',
        content: 'Bring a portable charger, universal adapter, and waterproof phone case. Keep passport, insurance cards, and emergency contacts accessible.',
        importance: 'medium'
      }
    ]
  },
  health: {
    title: 'Health & Safety',
    icon: Heart,
    tips: [
      {
        title: 'Physical Preparation',
        content: 'Start training 3-6 months before your trip. Build up gradually to walking 15-20km with your pack. Focus on strengthening leg muscles and improving cardio.',
        importance: 'high'
      },
      {
        title: 'Managing Chronic Conditions',
        content: 'Consult your doctor before traveling. Ensure you have enough medication for the entire trip plus extra. Know how to say your conditions in Spanish.',
        importance: 'high'
      },
      {
        title: 'Preventing Injuries',
        content: 'Warm up before walking each day. Use trekking poles to reduce joint stress. Take regular breaks and listen to your body.',
        importance: 'high'
      },
      {
        title: 'Hydration & Nutrition',
        content: 'Drink water regularly, even if not thirsty. Pack electrolyte supplements. Eat regular meals and carry energy snacks.',
        importance: 'medium'
      },
      {
        title: 'Emergency Contacts',
        content: 'Program local emergency numbers (112 in Spain/Portugal) into your phone. Consider purchasing travel insurance with medical coverage.',
        importance: 'high'
      }
    ]
  },
  safety: {
    title: 'Safety & Security',
    icon: Shield,
    tips: [
      {
        title: 'Personal Safety',
        content: 'Walk in groups when possible, especially in urban areas. Inform someone of your daily plans. Trust your instincts about people and situations.',
        importance: 'high'
      },
      {
        title: 'Weather Awareness',
        content: 'Check weather forecasts daily. Be prepared for sudden changes in mountain areas. Know signs of heat exhaustion and hypothermia.',
        importance: 'medium'
      },
      {
        title: 'Money & Valuables',
        content: 'Use a money belt or hidden pouch. Don\'t carry large amounts of cash. Keep copies of important documents separate from originals.',
        importance: 'medium'
      },
      {
        title: 'Navigation Safety',
        content: 'Always carry a physical map as backup. Download offline maps on your phone. Follow yellow arrows and official waymarks.',
        importance: 'medium'
      }
    ]
  },
  cultural: {
    title: 'Cultural Tips',
    icon: Globe,
    tips: [
      {
        title: 'Spanish Customs',
        content: 'Meals are later than in the US (lunch 2-4pm, dinner 9-11pm). Shops close for siesta (2-5pm). Tipping is not expected but appreciated.',
        importance: 'medium'
      },
      {
        title: 'Religious Etiquette',
        content: 'Dress modestly when visiting churches. Remove hats inside. Be respectful during religious services. Photography may be restricted.',
        importance: 'medium'
      },
      {
        title: 'Pilgrim Traditions',
        content: 'Say "Buen Camino" to fellow pilgrims. Respect the credencial (passport) tradition. Be considerate in albergues - wake up quietly.',
        importance: 'medium'
      },
      {
        title: 'Local Interactions',
        content: 'Spanish people are generally warm and helpful. Learn basic Spanish phrases. Be patient with language barriers.',
        importance: 'low'
      }
    ]
  },
  language: {
    title: 'Essential Spanish',
    icon: MessageSquare,
    tips: [
      {
        title: 'Basic Greetings',
        content: 'Hola (OH-lah) - Hello | Buenos días (BWAY-nos DEE-ahs) - Good morning | Buenas tardes (BWAY-nas TAR-des) - Good afternoon',
        importance: 'high'
      },
      {
        title: 'Camino Phrases',
        content: 'Buen Camino (bway-n kah-MEE-no) - Good Way | ¿Dónde está el albergue? (DON-de es-TAH el al-BER-gay) - Where is the hostel?',
        importance: 'high'
      },
      {
        title: 'Emergency Phrases',
        content: 'Ayuda (ah-YOO-dah) - Help | Necesito un médico (neh-seh-SEE-to oon MEH-di-ko) - I need a doctor | No hablo español (no AH-blo es-pahn-YOHL) - I don\'t speak Spanish',
        importance: 'high'
      },
      {
        title: 'Food & Accommodation',
        content: 'Una cama, por favor (OO-na KAH-ma por fah-VOR) - A bed, please | La cuenta, por favor (la KWAY-n-ta por fah-VOR) - The bill, please',
        importance: 'medium'
      }
    ]
  },
  preparation: {
    title: 'Pre-Trip Preparation',
    icon: Activity,
    tips: [
      {
        title: '6 Months Before',
        content: 'Start physical training program. Book flights and first few nights accommodation. Research route and create rough itinerary.',
        importance: 'high'
      },
      {
        title: '3 Months Before',
        content: 'Finalize gear purchases and test everything. Get travel insurance. Schedule medical check-up. Start learning basic Spanish.',
        importance: 'high'
      },
      {
        title: '1 Month Before',
        content: 'Confirm all bookings. Pack and weigh your backpack. Arrange for mail/pet care. Download offline maps and apps.',
        importance: 'medium'
      },
      {
        title: '1 Week Before',
        content: 'Check weather forecast. Charge all devices. Prepare emergency contact list. Get euros from bank.',
        importance: 'medium'
      }
    ]
  }
};

const importanceColors = {
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500'
};

export const TipsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('packing');

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-playfair font-bold">
          Senior Pilgrim's Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Essential tips and advice for travelers 50+ planning their Camino de Santiago journey.
        </p>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          {Object.entries(tipsData).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 text-sm"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.entries(tipsData).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <TabsContent key={key} value={key} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon className="h-6 w-6 mr-3 text-camino-gold" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.tips.map((tip, index) => (
                      <Card key={index} className="hover-lift">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold">{tip.title}</h3>
                            <Badge 
                              variant="secondary" 
                              className={`${importanceColors[tip.importance as keyof typeof importanceColors]} text-white text-xs`}
                            >
                              {tip.importance}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-senior leading-relaxed">
                            {tip.content}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Weather Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sun className="h-5 w-5 mr-2 text-camino-gold" />
            Seasonal Weather Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Sun className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <h3 className="font-semibold mb-2">Spring (Mar-May)</h3>
              <p className="text-sm text-muted-foreground">15-20°C, moderate rain, wildflowers blooming</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Thermometer className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold mb-2">Summer (Jun-Aug)</h3>
              <p className="text-sm text-muted-foreground">20-30°C, dry, hot during midday</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Cloud className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h3 className="font-semibold mb-2">Fall (Sep-Nov)</h3>
              <p className="text-sm text-muted-foreground">10-20°C, increasing rain, beautiful colors</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Snowflake className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold mb-2">Winter (Dec-Feb)</h3>
              <p className="text-sm text-muted-foreground">5-15°C, frequent rain, snow possible</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Information */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Emergency Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Emergency Numbers</h4>
              <ul className="text-sm space-y-1">
                <li>• General Emergency: 112</li>
                <li>• Medical Emergency: 061 (Spain), 112 (Portugal)</li>
                <li>• Police: 091 (Spain), 112 (Portugal)</li>
                <li>• Fire: 080 (Spain), 112 (Portugal)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">US Embassy Contacts</h4>
              <ul className="text-sm space-y-1">
                <li>• Madrid: +34 91 587 2200</li>
                <li>• Lisbon: +351 21 727 3300</li>
                <li>• After hours: +1 888 407 4747</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};