# Zpire - University Wellness Tracker

A modern, AI-powered wellness tracking platform for university students. Like a Fitbit for your academic journey, Zpire helps you monitor and optimize your mental, psychological, and physical wellbeing throughout university life.

## 🎯 About Zpire

Zpire is your personal development companion that tracks holistic wellness across three essential dimensions:
- **Mental Ring**: Academic growth, cognitive challenges, skill development
- **Psychological Ring**: Emotional wellness, stress management, work-life balance  
- **Physical Ring**: Physical activity, health habits, lifestyle maintenance

## ✨ Key Features

- **Smart Opportunity Discovery**: AI-powered web scraping finds relevant courses, events, clubs, and workshops
- **Three Wellness Rings**: Comprehensive tracking across mental, psychological, and physical dimensions
- **Personalized Insights**: AI assistant analyzes your patterns and provides tailored recommendations
- **Real-Time Support**: Get timely notifications like "Take a break" or "Join this sustainability event"
- **Holistic Dashboard**: See your complete wellness picture at a glance

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Installation

1. Clone the repository:
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:8080`

## 🚀 Deployment

This project is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deploy:
```bash
npm run build
```

The build output in `dist/` folder is ready to be deployed to any static hosting service.

## 📁 Project Structure

```
src/
├── assets/          # Images and wellness icons
├── components/      # React components
│   ├── ui/         # Reusable UI components (buttons, cards, etc.)
│   ├── Hero.tsx    # Hero section with wellness rings
│   ├── Features.tsx # Three wellness rings showcase
│   ├── Benefits.tsx # Student benefits section
│   ├── CTA.tsx     # Call-to-action for waitlist
│   └── Footer.tsx  # Footer component
├── pages/          # Page components
├── lib/            # Utility functions
└── index.css       # Global styles and wellness design system

## 🎨 Design System

The project uses a wellness-focused design system with:
- **Primary Colors**: Green (#2D8659) for physical wellness
- **Secondary Colors**: Purple (#7C3AED) for psychological wellness
- **Accent Colors**: Blue (#3B82F6) for mental wellness
- **Wellness Gradient**: Flowing gradient combining all three wellness colors
- **Animations**: Smooth transitions, floating elements, and ring animations
- **Typography**: Clean, modern font stack optimized for readability

All design tokens are defined in `src/index.css` and `tailwind.config.ts`.

## 🔧 Available Scripts


- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project was created for the Alibaba Cloud Zpire 2026 Vibe Coding Challenge.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please visit:
- [Alibaba Cloud Documentation](https://www.alibabacloud.com/help)
- [Tongyi Lingma](https://www.alibabacloud.com/en/product/lingma)

---

Built with ❤️ using AI-assisted development and Alibaba Cloud Tongyi Lingma
