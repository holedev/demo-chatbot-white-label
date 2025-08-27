"use client";

import { Building2, Upload } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBranding } from "@/lib/contexts/branding-context";

export function BrandingCustomizer() {
  const { branding, updateBranding } = useBranding();
  const [logoPreview, setLogoPreview] = useState(branding.logoUrl);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogoPreview(result);
        updateBranding({ logoUrl: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Brand Identity
        </CardTitle>
        <CardDescription>
          Configure your company branding and messaging
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Logo Upload */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Company Logo</Label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 overflow-hidden">
              {logoPreview ? (
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${logoPreview})` }}
                />
              ) : (
                <Upload className="h-6 w-6 text-gray-400" />
              )}
            </div>
            <div className="flex-1 space-y-2">
              <Input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                Upload PNG, JPG, or SVG. Recommended size: 64x64px
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo-url">Or enter logo URL</Label>
            <Input
              id="logo-url"
              value={branding.logoUrl}
              onChange={(e) => {
                updateBranding({ logoUrl: e.target.value });
                setLogoPreview(e.target.value);
              }}
              placeholder="https://example.com/logo.png"
            />
          </div>
        </div>

        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              id="company-name"
              value={branding.companyName}
              onChange={(e) => updateBranding({ companyName: e.target.value })}
              placeholder="Your Company Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chatbot-name">Chatbot Name</Label>
            <Input
              id="chatbot-name"
              value={branding.chatbotName}
              onChange={(e) => updateBranding({ chatbotName: e.target.value })}
              placeholder="AI Assistant"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tagline">Company Tagline</Label>
          <Input
            id="tagline"
            value={branding.tagline}
            onChange={(e) => updateBranding({ tagline: e.target.value })}
            placeholder="Your intelligent chat companion"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="welcome-message">Welcome Message</Label>
          <Textarea
            id="welcome-message"
            value={branding.welcomeMessage}
            onChange={(e) => updateBranding({ welcomeMessage: e.target.value })}
            placeholder="Hello! I'm your AI assistant. How can I help you today?"
            rows={3}
          />
        </div>

        {/* Preview */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Preview</Label>
          <div className="border rounded-lg p-4 bg-background">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                {logoPreview ? (
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${logoPreview})` }}
                  />
                ) : (
                  <Building2 className="h-5 w-5 text-primary" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  {branding.chatbotName}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {branding.tagline}
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <p className="text-sm">{branding.welcomeMessage}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
