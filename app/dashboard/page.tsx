"use client";

import { BrandingProvider } from "@/lib/contexts/branding-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ColorCustomizer,
  BrandingCustomizer,
  ConfigManager,
} from "@/components/dashboard";
import { ChatInterface } from "@/components/chatbot";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Palette, Building2, Settings, Eye } from "lucide-react";

export default function DashboardPage() {
  return (
    <BrandingProvider>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        {/* Navigation Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/chat">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Chat
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Branding Dashboard
              </h1>
              <p className="text-muted-foreground">
                Customize your chatbot's appearance and branding in real-time
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Customization Panel */}
              <div className="lg:col-span-2 space-y-6">
                <Tabs defaultValue="colors" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger
                      value="colors"
                      className="flex items-center gap-2"
                    >
                      <Palette className="h-4 w-4" />
                      Colors
                    </TabsTrigger>
                    <TabsTrigger
                      value="branding"
                      className="flex items-center gap-2"
                    >
                      <Building2 className="h-4 w-4" />
                      Branding
                    </TabsTrigger>
                    <TabsTrigger
                      value="config"
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Config
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="colors">
                    <ColorCustomizer />
                  </TabsContent>

                  <TabsContent value="branding">
                    <BrandingCustomizer />
                  </TabsContent>

                  <TabsContent value="config">
                    <ConfigManager />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Live Preview */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Live Preview</h2>
                    <p className="text-sm text-muted-foreground">
                      See your changes in real-time
                    </p>
                    <div className="transform scale-75 origin-top-left">
                      <ChatInterface className="w-[400px] h-[500px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BrandingProvider>
  );
}
