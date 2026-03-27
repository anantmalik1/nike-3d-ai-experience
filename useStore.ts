import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, Message, User } from '../types';
import { products as initialProducts } from '../data/products';

interface StoreState {
  // Products
  products: Product[];
  setProducts: (products: Product[]) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  
  // Chat
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
  
  // User
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  
  // UI State
  theme: 'dark' | 'light' | 'futuristic';
  setTheme: (theme: 'dark' | 'light' | 'futuristic') => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
  generatedLayout: string | null;
  setGeneratedLayout: (layout: string | null) => void;
  
  // Loading states
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  
  // Cursor effects
  cursorVariant: 'default' | 'hover' | 'click';
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
  
  // Sound
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Products
      products: initialProducts,
      setProducts: (products) => set({ products }),
      
      // Cart
      cart: [],
      addToCart: (product, size) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id && item.selectedSize === size);
        
        if (existingItem) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        
        return {
          cart: [...state.cart, { ...product, quantity: 1, selectedSize: size }]
        };
      }),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
      })),
      updateQuantity: (productId, quantity) => set((state) => ({
        cart: quantity <= 0
          ? state.cart.filter(item => item.id !== productId)
          : state.cart.map(item =>
              item.id === productId ? { ...item, quantity } : item
            )
      })),
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      getCartCount: () => {
        const state = get();
        return state.cart.reduce((count, item) => count + item.quantity, 0);
      },
      
      // Chat
      messages: [{
        id: 'welcome',
        text: 'Welcome to Nike AI Store! I\'m your personal shopping assistant. How can I help you find the perfect sneakers today?',
        sender: 'ai',
        timestamp: new Date()
      }],
      addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
      })),
      clearMessages: () => set({
        messages: [{
          id: 'welcome',
          text: 'Welcome to Nike AI Store! I\'m your personal shopping assistant. How can I help you find the perfect sneakers today?',
          sender: 'ai',
          timestamp: new Date()
        }]
      }),
      isChatOpen: false,
      setIsChatOpen: (isOpen) => set({ isChatOpen: isOpen }),
      
      // User
      user: null,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      isAuthenticated: false,
      
      // UI State
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      isGenerating: false,
      setIsGenerating: (isGenerating) => set({ isGenerating }),
      generatedLayout: null,
      setGeneratedLayout: (layout) => set({ generatedLayout: layout }),
      
      // Loading
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      
      // Cursor
      cursorVariant: 'default',
      setCursorVariant: (variant) => set({ cursorVariant: variant }),
      
      // Sound
      soundEnabled: true,
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
    }),
    {
      name: 'nike-ai-store-storage',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        theme: state.theme,
        soundEnabled: state.soundEnabled,
      })
    }
  )
);
