# Portfolio Monorepo

A comprehensive portfolio project built as a monorepo containing three applications: a web frontend, an admin dashboard, and a backend server.

## 🏗️ Project Structure

```
portfolio/
├── apps/
│   ├── web/          # Main portfolio website (React + Vite)
│   ├── admin/        # Admin dashboard (React + Vite)
│   └── server/       # Backend API (Express.js)
├── package.json      # Root workspace configuration
└── tsconfig.json     # Shared TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies for all workspaces:
```bash
bun install
```

## 🔧 Development

### Run all applications simultaneously
```bash
bun run dev
```
This starts:
- **Web** (port 5173): Main portfolio website
- **Admin** (port 8080): Admin dashboard
- **Server** (port 3000): Backend API

### Run individual applications
```bash
# Web frontend only
bun run dev:web

# Admin dashboard only
bun run dev:admin

# Backend server only
bun run dev:server
```

## 📦 Applications

### Web App (`apps/web/`)
- **Tech Stack**: React 19, TypeScript, Vite
- **Port**: 5173 (development)
- **Purpose**: Main portfolio website

**Key files:**
- `src/App.tsx` - Main application component
- `vite.config.ts` - Vite configuration
- `package.json` - Web app dependencies

### Admin App (`apps/admin/`)
- **Tech Stack**: React 19, TypeScript, Vite
- **Port**: 8080 (development)
- **Purpose**: Content management dashboard

**Key files:**
- `src/App.tsx` - Admin dashboard component
- `vite.config.ts` - Vite configuration with custom port
- `package.json` - Admin app dependencies

### Server App (`apps/server/`)
- **Tech Stack**: Express.js, Node.js
- **Port**: 3000 (default)
- **Purpose**: Backend API and services

**Key dependencies:**
- Express.js for API routing
- Mongoose for MongoDB integration
- Nodemailer for email services
- CORS, Helmet, Morgan for middleware

## 🛠️ Available Scripts

### Root Level Scripts
```bash
# Development
bun run dev          # Start all apps in development mode
bun run dev:web      # Start only web app
bun run dev:admin    # Start only admin app
bun run dev:server   # Start only server app

# Production
bun run start        # Start all apps in production mode
bun run start:web    # Start only web app (production)
bun run start:admin  # Start only admin app (production)
bun run start:server # Start only server app (production)

# Build
bun run build        # Build web and admin apps
bun run build:web    # Build only web app
bun run build:admin  # Build only admin app
```

### Individual App Scripts
Each app has its own scripts in their respective `package.json`:

**Web & Admin:**
- `bun run dev` - Development server
- `bun run build` - Production build
- `bun run preview` - Preview production build
- `bun run lint` - ESLint checking

**Server:**
- `bun run dev` - Development with nodemon

## 🔄 Making Changes

### Adding a New Feature to Web App
1. Navigate to `apps/web/`
2. Create components in `src/components/`
3. Update `src/App.tsx` or create new routes
4. Run `bun run dev:web` to test

### Adding a New Feature to Admin App
1. Navigate to `apps/admin/`
2. Create admin components in `src/components/`
3. Update `src/App.tsx`
4. Run `bun run dev:admin` to test

### Adding API Endpoints
1. Navigate to `apps/server/src/`
2. Create route files (e.g., `routes/portfolio.js`)
3. Update `index.js` to include new routes
4. Run `bun run dev:server` to test

### Adding Dependencies

**For a specific app:**
```bash
# Web app
cd apps/web && bun add <package-name>

# Admin app
cd apps/admin && bun add <package-name>

# Server app
cd apps/server && bun add <package-name>
```

**For the entire workspace:**
```bash
# From root directory
bun add <package-name> -w
```

## 🔧 Configuration

### TypeScript
Shared TypeScript configuration is in the root `tsconfig.json`. Individual apps extend this configuration.

### Environment Variables
Create `.env` files in each app directory as needed:
- `apps/web/.env`
- `apps/admin/.env`
- `apps/server/.env`

### Ports
Default development ports:
- Web: 5173
- Admin: 8080
- Server: 3000

Modify ports in respective `vite.config.ts` files or server configuration.

## 🚀 Deployment

### Building for Production
```bash
bun run build
```

This builds both the web and admin applications. For the server, no build step is required as it runs directly.

### Individual Builds
```bash
bun run build:web    # Build web app only
bun run build:admin  # Build admin app only
```

## 📝 Notes

- This project uses **Bun workspaces** for monorepo management
- The server app uses CommonJS modules while web/admin use ES modules
- All React apps use React 19 with TypeScript
- ESLint is configured for code quality in React apps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes in the appropriate app directory
4. Test your changes: `bun run dev`
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📧 Contact

**Author**: Shreyansh Awadhiya

For questions or support, please open an issue in the repository.
