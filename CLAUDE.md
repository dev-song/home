# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript Next.js application featuring dual portfolio experiences:
1. **Plain Resume Version**: Traditional portfolio with vertical scroll layout
2. **Interactive Movie-like Version**: 3-stage immersive experience (JSON → CLI → 3D)

## Common Commands

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run type-check` - Run TypeScript compiler check
- `pnpm test` - Run tests (if configured)

## Architecture

### Project Structure
- `/app` - Next.js 13+ app router with route definitions
- `/components` - Reusable React components
  - `/plain` - Components for traditional resume version
  - `/interactive` - Components for 3-stage interactive version
  - `/shared` - Shared components between both versions
- `/lib` - Utility functions, data management, and configurations
- `/data` - Centralized JSON data structure for portfolio content
- `/types` - TypeScript interfaces for portfolio data and components
- `/public` - Static assets (images, resume PDF, 3D models, etc.)
- `/styles` - Global CSS and component-specific styles

### Portfolio Versions

#### Plain Resume Version
Traditional portfolio sections:
- Hero section with personal introduction
- About section with detailed background
- Skills showcase with technical abilities
- Projects portfolio with descriptions and links
- Experience timeline with work history
- Contact section with form and social links

#### Interactive Movie-like Version
Three-stage immersive experience:

**Stage 1: JSON Data Display**
- Interactive JSON viewer/editor showing personal data
- Syntax highlighting and collapsible sections
- Real-time editing capabilities
- Search and filter functionality

**Stage 2: CLI Terminal Experience**
- Terminal-style interface with typing animations
- Loading progress bar with personal trivia
- Interactive commands (help, about, skills, etc.)
- Career timeline in terminal format
- **Mathematical ASCII 3D rotating cube rendering**
  - Real-time 3D cube rotation using matrix transformations
  - Vertex projection from 3D space to 2D ASCII grid
  - Smooth rotation animations showcasing graphics programming skills
  - Dynamic ASCII character rendering based on depth/surface normals

**Stage 3: 3D Human Figure**
- Human-shaped figure composed of information cubes
- Color-coded cubes by information type:
  - 🔵 Personal (blue)
  - 🟢 Professional (green)
  - 🟡 Skills (yellow)
  - 🔴 Projects (red)
  - 🟣 Education (purple)
  - ⚪ Contact (white)
- Interactive 3D controls (orbit, zoom, pan)
- Click/hover interactions with detailed overlays

### Data Management

Centralized data structure in `/data/portfolio.json`:
```typescript
interface PortfolioData {
  personal: PersonalInfo
  professional: ProfessionalInfo
  projects: Project[]
  skills: SkillCategory[]
  experience: Experience[]
  education: Education[]
  contact: ContactInfo
}
```

### Technical Stack Considerations

- **3D Graphics**: Three.js or React Three Fiber for Stage 3
- **Mathematical Rendering**: Custom 3D-to-ASCII projection engine for Stage 2
  - Matrix transformation libraries (gl-matrix or custom implementation)
  - Real-time ASCII rendering with depth sorting
  - Performance optimization for 60fps terminal animations
- **JSON Editing**: react-json-view or similar for Stage 1
- **Terminal UI**: Custom terminal component with graphics capabilities for Stage 2
- **Animations**: Framer Motion for transitions and effects
- **Responsive Design**: Mobile-first approach for both versions
- **Performance**: Lazy loading, code splitting, and optimization

## TypeScript Configuration

Uses strict TypeScript configuration for type safety. All components should be properly typed with interfaces for props, state, and data structures. Special attention to 3D rendering types and interactive component interfaces.
