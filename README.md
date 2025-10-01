# 🎮 VortexSeries GT-8 Mechanical Keyboard - 3D Animation Website

## العربية 🇸🇦

### نظرة عامة
موقع ويب تفاعلي ثلاثي الأبعاد يعرض لوحة المفاتيح الميكانيكية VortexSeries GT-8 بتقنيات حديثة وأنيميشن متطور.

### المميزات الرئيسية
- 🎨 **نماذج ثلاثية الأبعاد تفاعلية** باستخدام WebGI
- ⚡ **أنيميشن سلس ومتطور** باستخدام GSAP
- 📱 **تصميم متجاوب** يعمل على جميع الأجهزة
- 🚀 **أداء محسن** مع Next.js 14
- 🎯 **تجربة مستخدم متميزة** مع تأثيرات بصرية مذهلة

### التقنيات المستخدمة
- **Next.js 14** - إطار عمل React
- **WebGI** - محرك الرسوميات ثلاثية الأبعاد
- **GSAP** - مكتبة الأنيميشن
- **TypeScript** - لضمان جودة الكود
- **Tailwind CSS** - للتصميم والتنسيق

---

## English 🇺🇸

### Overview
An interactive 3D animation website showcasing the VortexSeries GT-8 Mechanical Keyboard with cutting-edge technology and advanced animations.

### Key Features
- 🎨 **Interactive 3D Models** powered by WebGI
- ⚡ **Smooth Advanced Animations** using GSAP
- 📱 **Responsive Design** works across all devices
- 🚀 **Optimized Performance** with Next.js 14
- 🎯 **Premium User Experience** with stunning visual effects

### Tech Stack
- **Next.js 14** - React Framework
- **WebGI** - 3D Graphics Engine
- **GSAP** - Animation Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling Framework

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Animation-Web-3D
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will automatically detect Next.js and deploy

### Environment Variables
No environment variables required for basic deployment.

## 📁 Project Structure

```
Animation-Web-3D/
├── app/
│   ├── component/
│   │   ├── AboutSection.tsx      # About section component
│   │   ├── AllComponent.tsx      # Main wrapper component
│   │   ├── LastSection.tsx       # Final section
│   │   ├── Navbar.tsx           # Navigation component
│   │   ├── OtherSection.tsx     # Additional content section
│   │   ├── TitleSection.tsx     # Hero/Title section
│   │   ├── WebGIViewer.tsx      # 3D viewer component
│   │   └── Wrapper.tsx          # Layout wrapper
│   ├── lib/
│   │   └── scroll-animation.ts  # Scroll animations
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/
│   ├── *.glb                    # 3D model files
│   └── *.png, *.jpg            # Image assets
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── package.json                 # Dependencies
```

## 🎨 3D Models

The project includes several 3D models:
- `scene.glb` - Main scene model
- `vortex.glb` - Keyboard model variations
- `vortexseries_mechanical_keyboard_gt-8__nj80.glb` - Detailed keyboard model

## 🔧 Customization

### Animations
Edit animations in:
- `app/component/TitleSection.tsx` - Hero animations
- `app/lib/scroll-animation.ts` - Scroll-based animations

### 3D Models
Replace `.glb` files in the `public/` directory with your own models.

### Styling
Modify styles using Tailwind classes or edit `app/globals.css`.

## 🐛 Troubleshooting

### Common Issues

1. **3D models not loading**
   - Ensure `.glb` files are in the `public/` directory
   - Check file paths in WebGI components

2. **Animations not working**
   - Verify GSAP plugins are properly registered
   - Check browser console for errors

3. **Build failures**
   - Run `npm run build` locally to test
   - Check for TypeScript errors

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: [your-email@example.com]

---

**Made with ❤️ using Next.js, WebGI, and GSAP**