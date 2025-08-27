"use client";

import { useBranding } from "@/lib/contexts/branding-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Palette, RotateCcw } from "lucide-react";

export function ColorCustomizer() {
  const { branding, updateBranding, resetBranding } = useBranding();

  const colorPresets = [
    {
      name: "Default",
      primary: "hsl(222.2 84% 4.9%)",
      secondary: "hsl(210 40% 98%)",
    },
    {
      name: "Blue",
      primary: "hsl(221.2 83.2% 53.3%)",
      secondary: "hsl(210 40% 98%)",
    },
    {
      name: "Green",
      primary: "hsl(142.1 76.2% 36.3%)",
      secondary: "hsl(138 76% 97%)",
    },
    {
      name: "Purple",
      primary: "hsl(262.1 83.3% 57.8%)",
      secondary: "hsl(270 95% 98%)",
    },
    {
      name: "Orange",
      primary: "hsl(24.6 95% 53.1%)",
      secondary: "hsl(60 54% 98%)",
    },
    {
      name: "Red",
      primary: "hsl(0 84.2% 60.2%)",
      secondary: "hsl(0 85.7% 97.3%)",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Color Customization
        </CardTitle>
        <CardDescription>
          Customize your chatbot's color scheme and appearance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Color Presets */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Color Presets</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {colorPresets.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                size="sm"
                className="justify-start"
                onClick={() =>
                  updateBranding({
                    primaryColor: preset.primary,
                    secondaryColor: preset.secondary,
                  })
                }
              >
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: preset.primary }}
                />
                {preset.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <div className="flex gap-2">
              <Input
                id="primary-color"
                type="color"
                value={
                  branding.primaryColor.includes("hsl")
                    ? "#000000"
                    : branding.primaryColor
                }
                onChange={(e) =>
                  updateBranding({ primaryColor: e.target.value })
                }
                className="w-12 h-10 p-1 border rounded"
              />
              <Input
                value={branding.primaryColor}
                onChange={(e) =>
                  updateBranding({ primaryColor: e.target.value })
                }
                placeholder="hsl(222.2 84% 4.9%)"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="secondary-color">Secondary Color</Label>
            <div className="flex gap-2">
              <Input
                id="secondary-color"
                type="color"
                value={
                  branding.secondaryColor.includes("hsl")
                    ? "#ffffff"
                    : branding.secondaryColor
                }
                onChange={(e) =>
                  updateBranding({ secondaryColor: e.target.value })
                }
                className="w-12 h-10 p-1 border rounded"
              />
              <Input
                value={branding.secondaryColor}
                onChange={(e) =>
                  updateBranding({ secondaryColor: e.target.value })
                }
                placeholder="hsl(210 40% 98%)"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bg-color">Background Color</Label>
            <div className="flex gap-2">
              <Input
                id="bg-color"
                type="color"
                value={
                  branding.backgroundColor.includes("hsl")
                    ? "#ffffff"
                    : branding.backgroundColor
                }
                onChange={(e) =>
                  updateBranding({ backgroundColor: e.target.value })
                }
                className="w-12 h-10 p-1 border rounded"
              />
              <Input
                value={branding.backgroundColor}
                onChange={(e) =>
                  updateBranding({ backgroundColor: e.target.value })
                }
                placeholder="hsl(0 0% 100%)"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text-color">Text Color</Label>
            <div className="flex gap-2">
              <Input
                id="text-color"
                type="color"
                value={
                  branding.textColor.includes("hsl")
                    ? "#000000"
                    : branding.textColor
                }
                onChange={(e) => updateBranding({ textColor: e.target.value })}
                className="w-12 h-10 p-1 border rounded"
              />
              <Input
                value={branding.textColor}
                onChange={(e) => updateBranding({ textColor: e.target.value })}
                placeholder="hsl(222.2 84% 4.9%)"
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Border Radius */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Border Radius: {branding.borderRadius}px
          </Label>
          <Slider
            value={[branding.borderRadius]}
            onValueChange={([value]) => updateBranding({ borderRadius: value })}
            max={20}
            min={0}
            step={1}
            className="w-full"
          />
        </div>

        {/* Reset Button */}
        <Button variant="outline" onClick={resetBranding} className="w-full">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Default
        </Button>
      </CardContent>
    </Card>
  );
}
