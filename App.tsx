import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ShoppingCart from './components/ShoppingCart';
import AIGenerator from './components/AIGenerator';
import { useCart } from './hooks/useCart';
import { useChatbot } from './hooks/useChatbot';
import { products } from './data/products';

function App() {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const {
    messages,
    isOpen: isChatOpen,
    setIsOpen: setChatOpen,
    isTyping,
    sendMessage,
  } = useChatbot();

  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState(false);
  const [_themeConfig, setThemeConfig] = useState({
    primaryColor: '#8b5cf6',
    secondaryColor: '#ec4899',
  });

  const handleAIGenerate = (prompt: string, config: any) => {
    console.log('AI Generating:', prompt, config);
    // Update theme based on AI config
    if (config.theme === 'luxury') {
      setThemeConfig({ primaryColor: '#f59e0b', secondaryColor: '#ea580c' });
    } else if (config.theme === 'ocean') {
      setThemeConfig({ primaryColor: '#3b82f6', secondaryColor: '#06b6d4' });
    } else if (config.theme === 'forest') {
      setThemeConfig({ primaryColor: '#10b981', secondaryColor: '#059669' });
    } else {
      setThemeConfig({ primaryColor: '#8b5cf6', secondaryColor: '#ec4899' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black pointer-events-none" />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar
          totalItems={totalItems}
          onCartClick={() => setIsCartOpen(true)}
          onAIStudioClick={() => setIsAIGeneratorOpen(true)}
        />

        {/* Hero Section */}
        <Hero />

        {/* Products Section */}
        <ProductGrid products={products} onAddToCart={addToCart} />

        {/* Features Section */}
        <Features />

        {/* Stats Section */}
        <Stats />

        {/* Footer */}
        <Footer />
      </div>

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={totalPrice}
      />

      {/* AI Chatbot */}
      <Chatbot
        isOpen={isChatOpen}
        setIsOpen={setChatOpen}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={sendMessage}
      />

      {/* AI Website Generator */}
      <AIGenerator
        isOpen={isAIGeneratorOpen}
        onClose={() => setIsAIGeneratorOpen(false)}
        onGenerate={handleAIGenerate}
      />

      {/* Success Toast Notifications */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-6 z-30 hidden md:block"
          >
            <div className="glass-strong rounded-xl p-4 border border-purple-500/30 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Cart Updated!</p>
                  <p className="text-xs text-gray-400 mt-1">
                    You have {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 origin-left z-50"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0 }}
      />
    </div>
  );
}

export default App;
