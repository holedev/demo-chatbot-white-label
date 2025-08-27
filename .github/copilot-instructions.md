# Copilot Instructions for demo-chatbot-white-label

## Project Overview
- **White-label chatbot platform** built with Next.js 15 + React 19, featuring a live branding dashboard
- Multi-page architecture: landing (`/`), chat interface (`/chat`), and branding dashboard (`/dashboard`)
- **Real-time theme system** via `BrandingContext` - changes instantly update the live chat preview
- **Shadcn/ui component system** with "new-york" style, OKLCH color space, and CSS variables
- **Biome** for unified linting/formatting (replaces ESLint + Prettier)

## Architecture & White-Label System
- **Context-driven branding**: `BrandingProvider` in `/lib/contexts/branding-context.tsx` manages all customization
- **Live preview architecture**: Dashboard shows real-time changes to chat interface without page refresh
- **Component structure**: `/components/chatbot` (chat UI) + `/components/dashboard` (customization panels)
- **Route hierarchy**: 
  - `/` - Landing with feature cards and navigation
  - `/chat` - Standalone chat interface
  - `/dashboard` - Real-time branding customization with live preview

## Core Branding System Patterns
- **BrandingConfig interface**: `primaryColor`, `companyName`, `welcomeMessage`, `borderRadius`, `logoUrl`, etc.
- **Context updates**: `updateBranding(updates: Partial<BrandingConfig>)` triggers instant UI changes across all components
- **Persistence**: localStorage auto-save/restore, plus export/import JSON functionality
- **Real-time synchronization**: All chat components (`ChatHeader`, `ChatInterface`, `Message`) use `useBranding()` hook
- **CSS injection**: Dynamic style updates via CSS custom properties, not component re-rendering
- **Color presets**: Pre-defined theme combinations in `ColorCustomizer` component

## Developer Workflows
- **Dev server**: `pnpm dev` (Turbopack enabled, runs on port 3000)
- **Code quality**: `pnpm lint` (Biome check), `pnpm format` (Biome format --write)
- **Component generation**: `pnpm dlx shadcn@latest add <component>` (auto-installs to `/components/ui`)
- **Theme testing**: Use `/dashboard` to test branding changes, preview in embedded chat interface

## Critical Component Patterns
- **Chat components**: All accept `className` prop for styling flexibility and use `useBranding()` hook
- **Branding integration**: `ChatHeader`, `ChatInterface`, and `Message` components dynamically update with branding changes
- **Context requirement**: All chat pages must be wrapped with `BrandingProvider` for branding context access
- **Demo chat logic**: `ChatInterface` uses `sampleResponses` array with simulated typing delays
- **Tab-based dashboard**: `Tabs` component splits customization into Colors, Branding, Config sections
- **Barrel exports**: Use `index.ts` files in component directories (`/chatbot`, `/dashboard`)

## Theme System Implementation
- **OKLCH color space**: All colors in `app/globals.css` use OKLCH for better perceptual uniformity
- **CSS variable structure**: `--color-*` tokens map to Tailwind classes via `@theme inline` directive
- **Dynamic theming**: `useBranding()` hook provides theme state and update functions
- **Radius system**: `--radius-sm` through `--radius-xl` calculated from base `--radius: 0.625rem`

## Environment & Configuration
- **No external APIs required**: Demo uses local state and mock responses
- **Biome config**: `biome.json` with Next.js + React domains, ignores build directories
- **Component aliases**: `@/components`, `@/lib/utils` defined in `components.json`
- **Turbopack**: Enabled for both dev and build processes in `package.json`

## Key Integration Points
- **BrandingProvider**: Wrap pages requiring theme context (see `/dashboard/page.tsx` and `/chat/page.tsx`)
- **Chat interface embedding**: Use `<ChatInterface className="..." />` for live previews
- **Navigation patterns**: `ArrowLeft` + `Link` for consistent back navigation
- **Component composition**: Layer shadcn/ui components with custom chat/dashboard logic
- **Branding propagation**: All chatbot components automatically receive branding updates via context

## Examples
```tsx
// Add branding context to a page
<BrandingProvider>
  <YourPageContent />
</BrandingProvider>

// Access branding in components
const { branding, updateBranding } = useBranding();

// Update theme programmatically
updateBranding({ primaryColor: "hsl(221.2 83.2% 53.3%)" });

// Add new customization panel
// Place in: /components/dashboard/your-customizer.tsx
// Export from: /components/dashboard/index.ts
```

---
For complete setup guide, see [README.md](../README.md).
