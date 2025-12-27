
import { Service, BlogPost, Product } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'EM Academia',
    abreviation: 'Acad',
    shortDescription: 'Gestion complète du cursus académique et de la vie estudiantine.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    price: 'Sur devis',
    isPhare: true
  },
  {
    id: '2',
    name: 'EM Business',
    abreviation: 'Biz',
    shortDescription: 'Solution ERP modulaire pour la gestion d’entreprise moderne.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    price: 'À partir de 150$',
    isPhare: true
  },
  {
    id: '3',
    name: 'Workaa',
    abreviation: 'Work',
    shortDescription: 'Espace collaboratif pour équipes agiles et télétravail.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    price: 'Gratuit',
    isPhare: true
  },
  {
    id: '4',
    name: 'EM People',
    abreviation: 'People',
    shortDescription: 'Gestion des ressources humaines et paie centralisée.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
    price: '50$/mois'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'L’IA au service du développement en Afrique',
    category: 'Innovation',
    date: '12 Mars 2025',
    image: 'https://picsum.photos/seed/ai/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isMarquant: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  },
  {
    id: '2',
    title: 'Nouveau programme Ambassadeur Tech',
    category: 'Programmes',
    date: '05 Mars 2025',
    image: 'https://picsum.photos/seed/tech/800/600',
    content: 'Découvrez notre nouvelle initiative pour les jeunes talents...'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'v1',
    name: 'veido-330',
    price: '199$',
    category: 'objets connectés',
    image: 'https://images.unsplash.com/photo-1558002038-1037906d858b?q=80&w=1000&auto=format&fit=crop',
    stock: 120,
    isFeatured: true,
    description: 'une vie améliorer'
  },
  {
    id: 'v2',
    name: 'Veido-conlight',
    price: '89$',
    category: 'objets connectés',
    image: 'https://images.unsplash.com/photo-1550524513-9636ee8b6180?q=80&w=1000&auto=format&fit=crop',
    stock: 50,
    isFeatured: true,
    description: 'une vie lumineuse'
  },
  {
    id: 'v3',
    name: 'Veido-sensor',
    price: '59$',
    category: 'objets connectés',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1000&auto=format&fit=crop',
    stock: 80,
    isFeatured: true,
    description: 'sécurité intelligente'
  },
  {
    id: 'e1',
    name: 'eolis wind12',
    price: '450$',
    category: 'énergies renouvelables',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop',
    stock: 200,
    isFeatured: true,
    description: 'un produit virtssoft Electronics'
  },
  {
    id: 'e2',
    name: 'eolis wind24',
    price: '850$',
    category: 'énergies renouvelables',
    image: 'https://images.unsplash.com/photo-1466611653911-95282ee3656b?q=80&w=1000&auto=format&fit=crop',
    stock: 100,
    isFeatured: true,
    description: 'un produit virtssoft Electronics'
  },
  {
    id: 'e3',
    name: 'eolis storage',
    price: '1200$',
    category: 'énergies renouvelables',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop',
    stock: 15,
    isFeatured: true,
    description: 'un produit virtssoft Electronics'
  }
];
