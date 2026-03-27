export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  colors: string[];
  sizes: number[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: number;
  selectedColor?: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AIResponse {
  text: string;
  actions?: {
    type: 'filter' | 'suggest' | 'navigate';
    data?: any;
  }[];
}
