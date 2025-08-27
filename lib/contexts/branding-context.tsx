"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export interface BrandingConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  logoUrl: string;
  companyName: string;
  tagline: string;
  chatbotName: string;
  welcomeMessage: string;
  isDarkMode: boolean;
}

const defaultBranding: BrandingConfig = {
  primaryColor: "hsl(222.2 84% 4.9%)",
  secondaryColor: "hsl(210 40% 98%)",
  backgroundColor: "hsl(0 0% 100%)",
  textColor: "hsl(222.2 84% 4.9%)",
  borderRadius: 8,
  logoUrl: "/next.svg",
  companyName: "AI Assistant",
  tagline: "Your intelligent chat companion",
  chatbotName: "AI Assistant",
  welcomeMessage: "Hello! I'm your AI assistant. How can I help you today?",
  isDarkMode: false,
};

interface BrandingContextType {
  branding: BrandingConfig;
  updateBranding: (updates: Partial<BrandingConfig>) => void;
  resetBranding: () => void;
  exportBranding: () => string;
  importBranding: (config: string) => void;
}

const BrandingContext = createContext<BrandingContextType | undefined>(
  undefined,
);

export function BrandingProvider({ children }: { children: React.ReactNode }) {
  const [branding, setBranding] = useState<BrandingConfig>(defaultBranding);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("chatbot-branding");
    if (saved) {
      try {
        setBranding({ ...defaultBranding, ...JSON.parse(saved) });
      } catch {
        console.error("Failed to load branding config");
      }
    }
  }, []);

  // Apply CSS variables when branding changes
  useEffect(() => {
    const root = document.documentElement;

    if (branding.isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Apply custom CSS variables
    root.style.setProperty("--primary", branding.primaryColor);
    root.style.setProperty("--secondary", branding.secondaryColor);
    root.style.setProperty("--background", branding.backgroundColor);
    root.style.setProperty("--foreground", branding.textColor);
    root.style.setProperty("--radius", `${branding.borderRadius}px`);
  }, [branding]);

  const updateBranding = (updates: Partial<BrandingConfig>) => {
    const newBranding = { ...branding, ...updates };
    setBranding(newBranding);
    localStorage.setItem("chatbot-branding", JSON.stringify(newBranding));
  };

  const resetBranding = () => {
    setBranding(defaultBranding);
    localStorage.removeItem("chatbot-branding");
  };

  const exportBranding = () => {
    return JSON.stringify(branding, null, 2);
  };

  const importBranding = (config: string) => {
    try {
      const parsed = JSON.parse(config);
      updateBranding(parsed);
    } catch (error) {
      throw new Error("Invalid configuration format");
    }
  };

  return (
    <BrandingContext.Provider
      value={{
        branding,
        updateBranding,
        resetBranding,
        exportBranding,
        importBranding,
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error("useBranding must be used within a BrandingProvider");
  }
  return context;
}
