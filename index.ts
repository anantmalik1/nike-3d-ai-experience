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
  selectedColor: string;
  selectedSize: number;
  id: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface AIGeneratorConfig {
  theme: 'dark' | 'light' | 'neon' | 'luxury';
  colors: string[];
  layout: 'modern' | 'classic' | 'futuristic';
  animations: boolean;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}
