# Web Chatbot White Label

A customizable, white-label chatbot solution built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project provides a foundation for creating branded chatbot interfaces that can be easily customized for different clients and use cases.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with React 19 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Shadcn/ui components for consistent UI
- **Real-time Branding**: Live dashboard with instant preview of branding changes
- **White-label Ready**: Complete branding customization including colors, company name, messages, and styling
- **Context-driven Architecture**: Centralized branding management via React Context
- **Code Quality**: Biome for linting and formatting
- **Performance**: Turbopack for fast development builds

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **pnpm**: Version 8.0 or higher (recommended package manager)
- **Git**: For version control

## 🛠️ Initial Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd demo-chatbot-white-label

# Install dependencies
pnpm install
```

### 2. Development Server

Start the development server:

```bash
pnpm dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000)

## 🎨 Branding & Customization Guide

### Real-time Branding Dashboard

The project features a comprehensive branding system with live preview:

1. **Visit `/dashboard`**: Access the real-time branding customization interface
2. **Color Customization**: Modify primary colors with live preview
3. **Brand Settings**: Update company name, welcome messages, and styling
4. **Instant Updates**: All changes are immediately reflected in the chat interface
5. **Export/Import**: Save and load branding configurations as JSON

## 📁 Project Structure

```
demo-chatbot-white-label/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Landing page
│   ├── chat/              # Standalone chat interface
│   │   └── page.tsx       # Chat page with BrandingProvider
│   └── dashboard/         # Branding customization dashboard
│       └── page.tsx       # Live branding dashboard
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui components
│   ├── chatbot/          # Chat interface components
│   │   ├── chat-header.tsx    # Branded chat header
│   │   ├── chat-interface.tsx # Main chat interface
│   │   ├── chat-input.tsx     # Message input component
│   │   ├── message.tsx        # Message display component
│   │   └── index.ts          # Barrel exports
│   └── dashboard/        # Branding customization components
│       ├── color-customizer.tsx    # Color theming panel
│       ├── branding-customizer.tsx # Brand settings panel
│       ├── config-manager.tsx      # Import/export config
│       └── index.ts               # Barrel exports
├── lib/                  # Utility functions and contexts
│   ├── utils.ts          # Common utilities
│   └── contexts/         # React contexts
│       └── branding-context.tsx # Centralized branding state
├── public/               # Static assets
├── components.json       # Shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev                  # Start development server with Turbopack

# Building
pnpm build               # Build for production
pnpm start               # Start production server

# Code Quality
pnpm lint                # Run Biome linter
pnpm format              # Format code with Biome

# Component Management
pnpm dlx shadcn@latest add [component]  # Add Shadcn/ui components
```
