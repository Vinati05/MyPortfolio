# Portfolio Website for Vinati Vege

## Overview

This is a modern, professional portfolio website for Vinati Vege, a Computer Science and Engineering student from VNRVJIET (Batch of 2027, CGPA 9.01). The website showcases her skills as a backend engineer and AI/ML enthusiast through an interactive, futuristic design with unique features like a command-line terminal interface for exploring content.

The application is built as a full-stack web application with a React frontend and Express backend, featuring sections for about, projects, experience, achievements, and contact information. The design emphasizes a tech-modern aesthetic with navy, dark blue, and electric blue color schemes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: TailwindCSS with custom CSS variables for consistent theming and responsive design
- **Component Library**: Radix UI primitives with shadcn/ui components for accessible, professional UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express framework for RESTful API endpoints
- **Language**: TypeScript for type safety across the full stack
- **Email Service**: Nodemailer integration for contact form functionality
- **Validation**: Zod for runtime type validation and schema enforcement
- **Development**: Hot module replacement with Vite middleware integration

### Database Layer
- **ORM**: Drizzle ORM for type-safe database interactions and migrations
- **Database**: PostgreSQL configured for production deployment
- **Connection**: Neon Database serverless driver for scalable cloud database access
- **Schema Management**: Centralized schema definitions in shared directory for consistency

### Authentication & Storage
- **User Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Basic user management system with extensible storage interface
- **File Storage**: Static asset serving with organized directory structure

### UI/UX Design Decisions
- **Theme System**: Custom CSS variables for consistent dark theme across all components
- **Interactive Elements**: Floating animations, typing effects, and smooth scrolling navigation
- **Accessibility**: Radix UI primitives ensure WCAG compliance and keyboard navigation
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Unique Features**: Terminal modal interface for alternative content exploration

### Performance Optimizations
- **Code Splitting**: Vite's automatic code splitting for optimal loading
- **Asset Optimization**: Automatic image optimization and lazy loading
- **Caching Strategy**: React Query for intelligent data caching and background updates
- **Bundle Analysis**: ESBuild for optimized production bundles

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack React Query for modern React patterns
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite**: Development server and build tool with hot reload capabilities

### UI Component Libraries
- **Radix UI**: Complete set of accessible, unstyled UI primitives including dialogs, tooltips, navigation menus
- **TailwindCSS**: Utility-first CSS framework with PostCSS and Autoprefixer integration
- **React Icons**: Simple Icons library for technology and social media icons
- **Lucide React**: Beautiful, customizable icon library for UI elements

### Backend Services
- **Express.js**: Web application framework for Node.js with middleware support
- **Nodemailer**: Email sending capability for contact form submissions
- **SMTP Configuration**: Gmail SMTP integration (configurable for other providers)

### Database & ORM
- **Drizzle ORM**: Modern TypeScript ORM with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle Kit**: Database migrations and schema management tools

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: Runtime type validation and schema validation for API endpoints

### Development Tools
- **TSX**: TypeScript execution for development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment plugins and error overlays

### Utility Libraries
- **Class Variance Authority**: Type-safe utility for managing component variants
- **CLSX**: Utility for conditionally joining classNames
- **Date-fns**: Modern date utility library for date formatting and manipulation
- **Nanoid**: Secure URL-friendly unique string ID generator

### Environment Configuration
- **Environment Variables**: DATABASE_URL, SMTP credentials, email configuration
- **Development Mode**: Automatic detection with appropriate tooling integration
- **Production Build**: Optimized builds with static asset serving