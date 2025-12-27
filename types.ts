
export interface Service {
  id: string;
  name: string;
  abreviation: string;
  shortDescription: string;
  longDescription?: string;
  price?: string;
  image: string;
  isPhare?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  videoUrl?: string;
  isMarquant?: boolean;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  stock: number;
  isFeatured?: boolean;
  description: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
}
