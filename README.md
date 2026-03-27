# 🚀 NIKE AI STUDIO - Futuristic AI-Powered eCommerce Platform

![Nike AI Studio](https://img.shields.io/badge/Nike-AI%20Studio-8b5cf6?style=for-the-badge&logo=nike&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 🎯 Overview

**NIKE AI STUDIO** is a cutting-edge, AI-powered eCommerce platform that pushes the boundaries of modern web development. This hackathon-winning application combines stunning futuristic design with intelligent features to create an immersive shopping experience like no other.

### ✨ Key Highlights

- 🤖 **AI Website Generator** - Generate custom storefronts with natural language prompts
- 💬 **Intelligent Chatbot** - 24/7 AI assistant for personalized shopping help
- 🎨 **Futuristic UI/UX** - Dark theme with neon gradients, glassmorphism, and stunning animations
- 🛒 **Smart Shopping Cart** - Real-time updates with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance

## 🎨 Design Features

### Visual Excellence
- **Glassmorphism Effects** - Modern frosted glass aesthetic throughout
- **Neon Gradients** - Purple, blue, and pink color scheme with glow effects
- **Smooth Animations** - Framer Motion for buttery-smooth transitions
- **3D-like Presentation** - Floating elements and parallax scrolling
- **Micro-interactions** - Hover effects, button ripples, and card tilts

### Color Palette
```css
Primary: #8b5cf6 (Purple)
Secondary: #ec4899 (Pink)
Accent: #3b82f6 (Blue)
Background: #000000 (Black)
```

## 🚀 Features

### 1. AI Website Generator
Transform your ideas into reality with our revolutionary AI-powered website builder:
- Natural language processing for prompt interpretation
- Multiple theme options (Neon Dark, Luxury Gold, Ocean Blue, Forest Green)
- Various layout styles (Modern Grid, Classic List, Futuristic, Minimal)
- Real-time preview in embedded iframe
- One-click enhancement options
- Export functionality for generated websites

### 2. AI Chatbot System
Engage with our intelligent shopping assistant:
- Context-aware responses
- Product recommendations based on user preferences
- Quick reply suggestions
- Real-time typing indicators
- Persistent chat history
- Beautiful message animations

### 3. Product Management
Browse and shop the latest Nike collection:
- Advanced filtering by category
- Real-time search functionality
- Multiple sorting options (Featured, Price, Rating)
- Quick view modal for detailed product inspection
- Color and size selection
- AI-powered product recommendations

### 4. Shopping Experience
- **Smooth Cart Operations** - Add, remove, and update quantities with animations
- **Real-time Price Calculations** - Instant subtotal and total updates
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Secure Checkout** - SSL encryption indicators

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Vite 7.2.4** - Next-generation frontend tooling
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code quality assurance
- **TypeScript** - Static type checking
- **Vite Plugin Singlefile** - Optimized production builds

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nike-ai-studio.git
cd nike-ai-studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
nike-ai-studio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx      # Navigation bar with cart icon
│   │   ├── Hero.tsx        # Hero section with animations
│   │   ├── ProductCard.tsx # Individual product display
│   │   ├── ProductGrid.tsx # Product listing and filters
│   │   ├── Chatbot.tsx     # AI chatbot interface
│   │   ├── ShoppingCart.tsx# Shopping cart sidebar
│   │   ├── AIGenerator.tsx # AI website generator modal
│   │   ├── Features.tsx    # Features showcase section
│   │   └── Footer.tsx      # Footer with links
│   ├── hooks/              # Custom React hooks
│   │   ├── useCart.ts      # Shopping cart logic
│   │   └── useChatbot.ts   # Chatbot functionality
│   ├── data/               # Static data
│   │   └── products.ts     # Product catalog
│   ├── types/              # TypeScript types
│   │   └── index.ts        # Type definitions
│   ├── utils/              # Utility functions
│   │   └── cn.ts           # Class name utilities
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles & animations
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

## 🎯 Component Overview

### Navbar
- Sticky header with glassmorphism
- Shopping cart with item count badge
- AI Studio launcher button
- Mobile-responsive hamburger menu

### Hero
- Animated gradient background
- Parallax floating elements
- Cursor glow effect
- Call-to-action buttons
- Scroll indicator

### ProductGrid
- Category filtering
- Search functionality
- Sort options
- Responsive grid layout
- Animated product cards

### ProductCard
- Image hover zoom
- Quick view modal
- Color selector
- Size selector
- Add to cart animation
- AI recommendation badge

### Chatbot
- Floating chat button
- Slide-in panel animation
- Message bubbles
- Quick reply chips
- Typing indicator
- Persistent messages

### ShoppingCart
- Slide-in sidebar
- Quantity controls
- Remove items
- Price calculations
- Checkout button
- Empty state

### AIGenerator
- Full-screen modal
- Prompt input
- Theme selector
- Layout options
- Live preview iframe
- Enhancement buttons
- Export functionality

## 🎨 Animation Highlights

### Custom CSS Animations
```css
- gradient-animation    # Animated background gradients
- float                # Floating elements
- pulse-glow          # Pulsing glow effects
- shimmer             # Shimmer loading effect
- ripple              # Button ripple effect
- slideInUp           # Slide-in animations
- loading-dots        # Loading dot sequence
```

### Framer Motion Variants
- Page transitions
- Stagger children animations
- Scale and rotate transforms
- Smooth spring physics
- Gesture-based interactions

## 🚀 Performance Optimizations

1. **Code Splitting** - Dynamic imports for faster initial load
2. **Image Optimization** - Lazy loading with Unsplash CDN
3. **CSS Purging** - Remove unused Tailwind classes
4. **Vite Optimization** - Fast HMR and build times
5. **Single File Build** - Optional single HTML output

## 🌟 Advanced Features

### AI Website Generator
The AI Generator simulates intelligent website creation:
- Parses natural language prompts
- Generates HTML/CSS based on configuration
- Live preview in iframe
- Multiple enhancement options
- Theme switching
- Export to file

### Smart Recommendations
- Product suggestions based on browsing
- AI badge for recommended items
- Category-based filtering
- Rating-based sorting

### Chatbot Intelligence
The chatbot provides contextual responses for:
- Product queries
- Price information
- Sizing help
- Shipping details
- Return policy
- General assistance

## 🎯 Use Cases

1. **Portfolio Project** - Showcase advanced React & TypeScript skills
2. **Hackathon Demo** - Win with impressive UI/UX and features
3. **Learning Resource** - Study modern web development patterns
4. **Template** - Start your own eCommerce project
5. **Interview Project** - Demonstrate full-stack capabilities

## 🔮 Future Enhancements

- [ ] Backend API integration (Node.js/Express)
- [ ] MongoDB database connection
- [ ] User authentication (JWT)
- [ ] Payment gateway (Stripe)
- [ ] Real OpenAI API integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Admin dashboard
- [ ] Email notifications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ by a passionate developer

## 🙏 Acknowledgments

- Nike for brand inspiration
- Unsplash for high-quality product images
- Lucide for beautiful icons
- Tailwind CSS for utility classes
- Framer Motion for smooth animations
- The React community for amazing tools

## 📧 Contact

For questions or feedback:
- GitHub Issues: [Create an issue](https://github.com/yourusername/nike-ai-studio/issues)
- Email: your.email@example.com

---

**⭐ Star this repository if you found it helpful!**

Made with 💜 using React, TypeScript, and AI-powered imagination.
