import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  packing: { icon: Backpack },
  health: { icon: Heart },
  safety: { icon: Shield },
  cultural: { icon: Globe },
  language: { icon: MessageSquare },
  preparation: { icon: Activity }
};

export const TipsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('packing');

  const importanceColors = {
    [t('tips.importance.high')]: 'bg-red-500',
    [t('tips.importance.medium')]: 'bg-yellow-500',
    [t('tips.importance.low')]: 'bg-green-500'
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-playfair font-bold">
          {t('tips.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('tips.subtitle')}
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
                <span className="hidden sm:inline">{t(`tips.categories.${key}`)}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.entries(tipsData).map(([key, category]) => {
          const Icon = category.icon;
          const tipKeys = Object.keys(t(`tips.${key}`, { returnObjects: true }) as object);
          
          return (
            <TabsContent key={key} value={key} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon className="h-6 w-6 mr-3 text-camino-gold" />
                    {t(`tips.categories.${key}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tipKeys.map((tipKey, index) => {
                      const tip = t(`tips.${key}.${tipKey}`, { returnObjects: true }) as any;
                      return (
                        <Card key={index} className="hover-lift">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-lg font-semibold">{tip.title}</h3>
                              <Badge 
                                variant="secondary" 
                                className={`${importanceColors[tip.importance]} text-white text-xs`}
                              >
                                {tip.importance}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-senior leading-relaxed">
                              {tip.content}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
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
            {t('tips.weather.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Sun className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <h3 className="font-semibold mb-2">{t('tips.weather.spring.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('tips.weather.spring.description')}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Thermometer className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold mb-2">{t('tips.weather.summer.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('tips.weather.summer.description')}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Cloud className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h3 className="font-semibold mb-2">{t('tips.weather.fall.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('tips.weather.fall.description')}</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Snowflake className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold mb-2">{t('tips.weather.winter.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('tips.weather.winter.description')}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Information */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <AlertTriangle className="h-5 w-5 mr-2" />
            {t('tips.emergency.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{t('tips.emergency.emergencyNumbers')}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t('tips.emergency.generalEmergency')}</li>
                <li>• {t('tips.emergency.medicalEmergency')}</li>
                <li>• {t('tips.emergency.police')}</li>
                <li>• {t('tips.emergency.fire')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t('tips.emergency.usEmbassyContacts')}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t('tips.emergency.madridEmbassy')}</li>
                <li>• {t('tips.emergency.lisbonEmbassy')}</li>
                <li>• {t('tips.emergency.afterHours')}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};