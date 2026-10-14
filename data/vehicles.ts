export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  price: number;
  oldPrice?: number;
  km: number;
  fuel: 'Gasolina' | 'Diésel' | 'Híbrido' | 'Eléctrico';
  transmission: 'Manual' | 'Automático';
  hp: number;
  badge: 'Nuevo' | 'KM0' | 'Seminuevo' | 'Ocasión' | 'Eco';
  ecoLabel: 'C' | 'ECO' | '0';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  featured?: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    slug: 'cupra-formentor-vz-hybrid',
    brand: 'CUPRA',
    model: 'Formentor',
    version: '1.4 e-HYBRID VZ 245 CV DSG',
    year: 2023,
    price: 34900,
    oldPrice: 38500,
    km: 15400,
    fuel: 'Híbrido',
    transmission: 'Automático',
    hp: 245,
    badge: 'Seminuevo',
    ecoLabel: 'ECO',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Diseño radical, dinamismo excepcional y tecnología híbrida enchufable con etiqueta ECO. Revisiones oficiales en servicio oficial.',
    features: ['Digital Cockpit', 'Asientos deportivos bucket', 'Cámara 360º', 'Llantas de 19\" copper', 'Faros Full LED Matrix'],
    featured: true
  },
  {
    id: '2',
    slug: 'tesla-model-y-long-range',
    brand: 'Tesla',
    model: 'Model Y',
    version: 'Gran Autonomía AWD Dual Motor',
    year: 2023,
    price: 43900,
    oldPrice: 47000,
    km: 22000,
    fuel: 'Eléctrico',
    transmission: 'Automático',
    hp: 514,
    badge: 'Ocasión',
    ecoLabel: '0',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1b?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Autonomía superior a 500 km, tracción total inteligente y espacio líder en su categoría. Etiqueta Cero emisiones.',
    features: ['Autopilot básico', 'Techo de cristal panorámico', 'Sonido premium 14 altavoces', 'Asientos calefactados'],
    featured: true
  },
  {
    id: '3',
    slug: 'audi-q3-sportback-s-line',
    brand: 'Audi',
    model: 'Q3 Sportback',
    version: '35 TDI 150 CV S line S tronic',
    year: 2022,
    price: 36500,
    km: 31000,
    fuel: 'Diésel',
    transmission: 'Automático',
    hp: 150,
    badge: 'Seminuevo',
    ecoLabel: 'C',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Elegancia coupé y versatilidad SUV. Paquete S line exterior e interior, impecable estado.',
    features: ['Audi Virtual Cockpit plus', 'MMI Navegación plus', 'Portón maletero eléctrico', 'Sensores de aparcamiento con APS'],
    featured: true
  },
  {
    id: '4',
    slug: 'volkswagen-golf-gti',
    brand: 'Volkswagen',
    model: 'Golf',
    version: 'GTI 2.0 TSI 245 CV DSG',
    year: 2023,
    price: 33900,
    km: 18500,
    fuel: 'Gasolina',
    transmission: 'Automático',
    hp: 245,
    badge: 'Seminuevo',
    ecoLabel: 'C',
    image: 'https://images.unsplash.com/photo-1622227922714-ed25612f0e0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622227922714-ed25612f0e0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'El icono de los compactos deportivos. Máximo deportivismo con la versatilidad diaria del Golf.',
    features: ['Escape deportivo', 'Faros IQ.Light Matrix LED', 'Suspensión adaptativa DCC', 'Head-up Display'],
    featured: true
  },
  {
    id: '5',
    slug: 'toyota-rav4-hybrid',
    brand: 'Toyota',
    model: 'RAV4',
    version: '220H 4x2 Advance',
    year: 2023,
    price: 29800,
    km: 25000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    hp: 218,
    badge: 'Seminuevo',
    ecoLabel: 'ECO',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Fiabilidad legendaria Toyota, consumos mínimos en ciudad y gran habitabilidad familiar.',
    features: ['Toyota Safety Sense', 'Cámara de visión trasera', 'Pantalla multimedia 10.5\"', 'Acceso y arranque sin llave'],
    featured: false
  },
  {
    id: '6',
    slug: 'bmw-serie-3-320d',
    brand: 'BMW',
    model: 'Serie 3',
    version: '320d Touring M Sport 190 CV',
    year: 2022,
    price: 37900,
    km: 42000,
    fuel: 'Diésel',
    transmission: 'Automático',
    hp: 190,
    badge: 'Ocasión',
    ecoLabel: 'ECO',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Familiar deportivo por excelencia. Paquete aerodinámico M y excelente eficiencia en viajes largos.',
    features: ['Paquete M Sport', 'BMW Live Cockpit Professional', 'Techo solar panorámico', 'Faros Laserlight'],
    featured: true
  },
  {
    id: '7',
    slug: 'mercedes-benz-a-250e',
    brand: 'Mercedes-Benz',
    model: 'Clase A',
    version: 'A 250 e Sedán Híbrido Enchufable',
    year: 2023,
    price: 35500,
    km: 19200,
    fuel: 'Híbrido',
    transmission: 'Automático',
    hp: 218,
    badge: 'KM0',
    ecoLabel: '0',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Lujo compacto con tecnología híbrida avanzada. MBUX con inteligencia artificial y hasta 70km en eléctrico.',
    features: ['MBUX Superscreen', 'Paquete AMG Line', 'Iluminación ambiental 64 colores', 'Realidad aumentada para navegación'],
    featured: false
  },
  {
    id: '8',
    slug: 'hyundai-tucson-hybrid',
    brand: 'Hyundai',
    model: 'Tucson',
    version: '1.6 TGDi HEV Klass',
    year: 2023,
    price: 27500,
    km: 21000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    hp: 230,
    badge: 'Seminuevo',
    ecoLabel: 'ECO',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'El SUV más vendido con diseño vanguardista, confort sobresaliente y etiqueta ECO.',
    features: ['Cámara de ángulo muerto', 'Asistente de mantenimiento de carril', 'Cargador inalámbrico', 'Apple CarPlay / Android Auto'],
    featured: false
  }
];

export const brandsList = [
  'Volkswagen', 'SEAT', 'CUPRA', 'Toyota', 'Peugeot', 'Renault', 'Ford', 'Hyundai', 'Kia', 'BMW', 'Audi', 'Mercedes-Benz', 'Tesla'
];
