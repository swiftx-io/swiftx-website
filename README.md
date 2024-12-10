# SwiftX Website

## Overview

SwiftX Website is a modern web application built with Next.js, focusing on delivering professional software solutions. The project implements a component-based architecture using React and TypeScript, featuring a comprehensive UI component library, theme management system, and responsive design.

### Key Features

- Next.js-powered web application
- React and TypeScript component architecture
- Modular UI component library
- Dark/Light theme support
- Responsive design implementation
- Form validation with Zod
- Toast notifications system

## Installation

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm package manager

### Setup

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

## Development

### Available Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run linting checks
- `pnpm format` - Fix formatting issues
- `pnpm test` - Run test suite

### Development Workflow

1. Start the development server:
```bash
pnpm dev
```
2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. Make changes and see live updates

### Quality Checks

Before submitting changes:
1. Run `pnpm format` to fix any formatting issues
2. Run `pnpm build` to ensure successful build
3. Run `pnpm test` to verify all tests pass
4. Verify SonarCloud analysis shows 0 issues
5. Address any CodeRabbit AI review comments

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root application layout
│   ├── page.tsx         # Home page component
│   └── globals.css      # Global styling
├── components/          # React components
│   ├── ui/             # Reusable UI primitives
│   └── sections/       # Page-specific sections
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── public/             # Static assets
```

### Core Components

- `ThemeProvider`: Application-wide theme management
- `HeroSection`, `ServicesSection`, `AboutSection`, `ContactSection`: Main page sections
- UI Primitives: Button, Input, Toast, etc.
- Custom hooks for toast notifications and form handling

## Contributing

### Branch Naming Convention

Format: `devin/{timestamp}-{descriptive-slug}` (where timestamp is generated using `date +%s`)

### Pull Request Process

1. Create a feature branch
2. Make your changes
3. Run quality checks:
   - Format code: `pnpm format`
   - Build check: `pnpm build`
   - Test suite: `pnpm test`
4. Push changes and create PR
5. Ensure all automated checks pass:
   - SonarCloud analysis
   - CodeRabbit AI review
   - CI/CD pipeline checks
6. Address review comments
7. Await approval and merge

## License

Private repository - All rights reserved
