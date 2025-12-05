# La Nuit de l'Info 2025 - NIRD Initiative Landing Page

## 🎯 Project Overview

This is a modern, visually striking landing page built for **La Nuit de l'Info 2025** (The Night of Info), promoting the **NIRD Resistance** initiative. The site presents a compelling narrative around Windows 10 end-of-life, contrasting proprietary solutions with open-source, sustainable alternatives.

**Theme**: "Windows 10 is ending. Will you submit or resist?" 
- A cyberpunk-inspired design with neon colors (#ff0080 pink, #00ffff cyan, #ffff00 yellow)
- Interactive animations and immersive user experience
- Responsive design for all devices

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js** 16.0.7 - React-based full-stack framework
- **React** 19.2.0 - UI library with hooks
- **TypeScript** 5 - Type-safe development

### Styling & Animation
- **Tailwind CSS** 4.1.9 - Utility-first CSS framework
- **PostCSS** 8.5 - CSS transformation
- **Framer Motion** - Smooth animations and transitions
- **Tailwind Merge** - Smart class merging utilities
- **Tailwind Animate** - Pre-built animation utilities

### UI Components
- **Radix UI** - Unstyled, accessible component library (40+ components)
  - Accordion, Alert Dialog, Avatar, Badge, Breadcrumb, Button Group, Calendar, Card, Carousel, Checkbox, Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Sidebar, Slider, Switch, Tabs, Toggle, Tooltip
- **Lucide React** - Beautiful icon library
- **Custom UI Components** - Extended component library in `/components/ui/`

### Form & Data
- **React Hook Form** - Efficient form state management
- **@hookform/resolvers** - Form validation resolvers
- **Zod** 3.25.76 - TypeScript-first schema validation
- **Input OTP** - OTP input component
- **Date-fns** 4.1.0 - Lightweight date utility library

### Utilities & Features
- **Sonner** - Toast notifications
- **Recharts** - Composable charting library
- **Embla Carousel** - Lightweight carousel/slider
- **React Resizable Panels** - Draggable panel layouts
- **Vaul** - Drawer/modal primitives
- **Next Themes** - Light/dark mode support
- **Clsx** - Conditional CSS class composition
- **Class Variance Authority** - Component variant patterns
- **Vercel Analytics** - Usage analytics

---

## 📁 Project Structure

```
lanuitdelinfolandingpage1/
├── app/
│   ├── layout.tsx          # Root layout with metadata & global providers
│   ├── page.tsx            # Home page (main landing page)
│   ├── globals.css         # Global styles
│   └── maingame/           # Nested app directory (future game/feature)
│       └── tsconfig.json   # TypeScript config for nested app
│
├── components/
│   ├── navbar.tsx          # Navigation bar with animated links
│   ├── intro-hero.tsx      # Introduction hero section
│   ├── hero-section.tsx    # "Submit or Resist?" choice section
│   ├── nird-section.tsx    # NIRD Initiative information
│   ├── comparison-arena.tsx # Windows vs Open Source comparison
│   ├── video-section.tsx   # Embedded video section
│   ├── survival-kit.tsx    # Resources and guides
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # Theme provider wrapper
│   └── ui/                 # Reusable Radix UI-based components
│       ├── accordion.tsx
│       ├── alert.tsx, alert-dialog.tsx
│       ├── avatar.tsx, badge.tsx, breadcrumb.tsx
│       ├── button.tsx, button-group.tsx
│       ├── calendar.tsx, card.tsx, carousel.tsx
│       ├── checkbox.tsx, collapsible.tsx, command.tsx
│       ├── context-menu.tsx, dialog.tsx, drawer.tsx
│       ├── dropdown-menu.tsx, field.tsx, form.tsx
│       ├── hover-card.tsx, input.tsx, input-group.tsx
│       ├── input-otp.tsx, item.tsx, kbd.tsx
│       ├── label.tsx, menubar.tsx, navigation-menu.tsx
│       ├── popover.tsx, progress.tsx, radio-group.tsx
│       ├── resizable.tsx, scroll-area.tsx, select.tsx
│       ├── separator.tsx, sheet.tsx, sidebar.tsx
│       ├── skeleton.tsx, slider.tsx, spinner.tsx
│       ├── switch.tsx, tabs.tsx, textarea.tsx
│       ├── toggle.tsx, toggle-group.tsx, tooltip.tsx
│       ├── chart.tsx, sonner.tsx, table.tsx
│       ├── use-mobile.tsx, use-toast.ts
│       └── (Toast & Toaster components)
│
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
│
├── lib/
│   └── utils.ts            # Utility functions (clsx, cn, etc.)
│
├── public/                 # Static assets
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   ├── icon.svg
│   └── apple-icon.png
│
├── styles/
│   └── globals.css         # Global stylesheet
│
├── package.json            # Project dependencies & scripts
├── pnpm-lock.yaml         # Locked dependency versions (pnpm)
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
└── components.json        # Shadcn/ui component config
```

---

## 🎨 Key Components

### Page Layout (`app/page.tsx`)
The main landing page renders 8 major sections in sequence:
1. **Navbar** - Fixed navigation with animated links
2. **IntroHero** - Opening introduction
3. **NirdSection** - NIRD Initiative details
4. **ComparisonArena** - Windows 10 vs Open Source comparison
5. **VideoSection** - Embedded promotional video
6. **SurvivalKit** - Resources and guides
7. **HeroSection** - "Submit or Resist?" call-to-action
8. **Footer** - Contact and social links

### Navigation (`components/navbar.tsx`)
- Fixed top navigation with glassmorphism design
- Animated logo with gradient text and glow effects
- Mobile-responsive hamburger menu
- Color-coded navigation links (#ff0080 pink, #00ffff cyan, #ffff00 yellow)
- Smooth animations with Framer Motion

### Hero Sections
- **IntroHero**: Sets the dystopian tone
- **HeroSection**: Two-column layout contrasting "Submit" (Windows/The Empire) vs "Resist" (Open Source/The Rebellion)
  - Heavy use of glow effects and scanline overlays
  - Animated glitch effects for visual impact

### Comparison Arena (`comparison-arena.tsx`)
- Direct comparison of Windows 10 proprietary solutions vs open-source alternatives
- Feature comparison tables or cards
- Performance and sustainability metrics

### Survival Kit (`survival-kit.tsx`)
- Resources, guides, and downloads
- Links to open-source alternatives
- Migration guides and best practices

### Footer (`footer.tsx`)
- Contact information
- Social media links
- Event details and sponsors

---

## ⚙️ Configuration

### Next.js Config (`next.config.mjs`)
```javascript
export default {
  typescript: {
    ignoreBuildErrors: true,  // Skip TS errors during build
  },
  images: {
    unoptimized: true,        // Don't optimize images (static hosting)
  },
}
```

### TypeScript Config (`tsconfig.json`)
- **Target**: ES6
- **Module**: ESNext (bundler)
- **JSX**: react-jsx
- **Path Alias**: `@/*` maps to root directory
- **Strict Mode**: Enabled

### Tailwind Config
- Custom color palette with neon colors
- Animations and transitions
- PostCSS 4.x integration

---

## 📦 Dependencies

### Production Dependencies (69 packages)
**Core React & Next.js:**
- react@19.2.0, react-dom@19.2.0, next@16.0.7

**Radix UI Components (40+):**
- All Radix primitives for accessible, unstyled components

**Forms & Validation:**
- react-hook-form, @hookform/resolvers, zod

**Styling & Animation:**
- tailwindcss@4.1.9, framer-motion, next-themes, tailwind-merge, tailwindcss-animate

**Icons & UI:**
- lucide-react, embla-carousel-react, recharts, sonner

**Utilities:**
- date-fns, input-otp, clsx, class-variance-authority, react-resizable-panels, vaul

**Analytics:**
- @vercel/analytics, @emotion/is-prop-valid

### Dev Dependencies (5 packages)
- @tailwindcss/postcss@4.1.9
- @types/node@22, @types/react@19, @types/react-dom@19
- typescript@5
- postcss@8.5
- tw-animate-css@1.3.3

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (includes npm/pnpm)
- **Package Manager**: npm, yarn, or pnpm (recommended)

### Installation

If you encounter PowerShell execution policy errors:

**Option 1: Use npm.cmd (Quick Fix)**
```powershell
npm.cmd install
```

**Option 2: Change PowerShell Execution Policy (Permanent)**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
npm install
```

**Option 3: Use pnpm (Recommended)**
```powershell
corepack enable
pnpm install
```

### Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 🎯 Project Goals

1. **Raise Awareness** - Highlight Windows 10 end-of-life challenge
2. **Promote Alternatives** - Showcase sustainable open-source solutions
3. **Build Community** - Engage developers and users in the NIRD initiative
4. **Educational Content** - Provide resources for migration and learning
5. **Call to Action** - Encourage "Resistance" to proprietary lock-in

---

## 🌐 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Pink/Magenta | #ff0080 | Primary accent, borders, glow |
| Cyan | #00ffff | Secondary accent, highlights |
| Yellow | #ffff00 | Tertiary accent, emphasis |
| Black | #000000 | Background |
| Dark Gray | #0a0a12 | Card backgrounds |
| Light Gray | #cccccc | Text alternative |

---

## 📱 Responsive Design

- **Mobile First**: Built with mobile devices in mind
- **Breakpoints**: Tailwind CSS defaults (sm, md, lg, xl, 2xl)
- **Touch-Friendly**: Buttons and interactive elements optimized for touch
- **Hamburger Menu**: Mobile navigation toggle

---

## 🔧 Troubleshooting

### "npm cannot be loaded" Error
PowerShell execution policy issue. Use `npm.cmd install` or change policy as shown above.

### Build Errors
TypeScript errors are ignored in `next.config.mjs`. Check the console for warnings.

### Image Issues
Images are unoptimized in the config (`images.unoptimized: true`). Ensure all images are in `/public`.

---

## 📄 License

This project is part of **La Nuit de l'Info 2025** initiative. Check individual dependencies for their licenses.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📞 Contact & Resources

- **Event**: La Nuit de l'Info 2025
- **Website**: [nuitdelinfo.com](https://www.nuitdelinfo.com)
- **Initiative**: NIRD (Sustainable, Inclusive, Responsible Digital)

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

---

**Generated**: December 2025  
**Version**: 0.1.0
