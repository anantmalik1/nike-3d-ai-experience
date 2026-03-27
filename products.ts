import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max Pulse',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    category: 'Running',
    description: 'Experience the next generation of Air technology with premium comfort and style.',
    rating: 4.8,
    colors: ['Black', 'White', 'Red'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '2',
    name: 'Nike Dunk Low Retro',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
    category: 'Lifestyle',
    description: 'Classic basketball style with a modern twist. Perfect for everyday wear.',
    rating: 4.9,
    colors: ['Blue', 'Green', 'Orange'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '3',
    name: 'Nike Air Jordan 1',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80',
    category: 'Basketball',
    description: 'Iconic basketball heritage meets premium craftsmanship and style.',
    rating: 5.0,
    colors: ['Red', 'Black', 'White'],
    sizes: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    id: '4',
    name: 'Nike ZoomX Vaporfly',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    category: 'Running',
    description: 'Elite racing shoe designed for maximum speed and performance.',
    rating: 4.7,
    colors: ['Pink', 'Green', 'Yellow'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '5',
    name: 'Nike Blazer Mid 77',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80',
    category: 'Lifestyle',
    description: 'Vintage basketball style with modern comfort and timeless appeal.',
    rating: 4.6,
    colors: ['White', 'Black', 'Navy'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '6',
    name: 'Nike React Infinity',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    category: 'Running',
    description: 'Maximum cushioning and support for long-distance running comfort.',
    rating: 4.8,
    colors: ['Grey', 'Blue', 'Orange'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '7',
    name: 'Nike SB Dunk High',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1612902376139-f966e652e0e7?w=800&q=80',
    category: 'Skateboarding',
    description: 'Designed for skaters with enhanced durability and board feel.',
    rating: 4.7,
    colors: ['Purple', 'Green', 'Orange'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '8',
    name: 'Nike Cortez Classic',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80',
    category: 'Lifestyle',
    description: 'Timeless classic that started the Nike revolution in comfort.',
    rating: 4.5,
    colors: ['White', 'Red', 'Blue'],
    sizes: [7, 8, 9, 10, 11, 12]
  }
];

export const categories = ['All', 'Running', 'Lifestyle', 'Basketball', 'Skateboarding'];

export const aiResponses = {
  greeting: [
    "Hey there! 👟 Looking for the perfect Nike kicks?",
    "Welcome to Nike AI Studio! How can I help you find your dream shoes today?",
    "Hi! I'm your AI shopping assistant. Ready to discover amazing sneakers?"
  ],
  productQuery: [
    "Great choice! Let me show you our best options...",
    "I've found some amazing shoes that match your style!",
    "Check out these incredible picks I've selected for you!"
  ],
  recommendation: [
    "Based on your preferences, I think you'll love these!",
    "These would be perfect for you based on what you're looking for!",
    "I've curated a special selection just for you!"
  ],
  help: [
    "I can help you find shoes, check prices, or give recommendations. What would you like to know?",
    "Need help with sizing, colors, or finding the perfect pair? I'm here to assist!",
    "Ask me anything about our Nike collection or get personalized recommendations!"
  ],
  cart: [
    "Great selection! Would you like to see similar items?",
    "Added to cart! These shoes are going to look amazing on you!",
    "Nice choice! Ready to check out or keep shopping?"
  ]
};
