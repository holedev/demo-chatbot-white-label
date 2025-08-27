"use client";

import { Check, Copy, Download, Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBranding } from "@/lib/contexts/branding-context";

export function ConfigManager() {
  const { branding, exportBranding, importBranding, resetBranding } =
    useBranding();
  const [importValue, setImportValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleExport = () => {
    const config = exportBranding();
    navigator.clipboard.writeText(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    try {
      importBranding(importValue);
      setImportValue("");
      setError("");
    } catch {
      setError("Invalid configuration format. Please check your JSON.");
    }
  };

  const handleDownload = () => {
    const config = exportBranding();
    const blob = new Blob([config], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chatbot-branding.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Configuration Management
        </CardTitle>
        <CardDescription>
          Export, import, or reset your branding configuration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Config Preview */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Current Configuration</Label>
          <div className="bg-muted rounded-lg p-3">
            <pre className="text-xs overflow-x-auto">
              {JSON.stringify(branding, null, 2)}
            </pre>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleExport} variant="outline" size="sm">
              {copied ? (
                <Check className="h-4 w-4 mr-2" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              {copied ? "Copied!" : "Copy to Clipboard"}
            </Button>
            <Button onClick={handleDownload} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download JSON
            </Button>
          </div>
        </div>

        {/* Import Configuration */}
        <div className="space-y-3">
          <Label htmlFor="import-config" className="text-sm font-medium">
            Import Configuration
          </Label>
          <Textarea
            id="import-config"
            value={importValue}
            onChange={(e) => {
              setImportValue(e.target.value);
              setError("");
            }}
            placeholder="Paste your configuration JSON here..."
            rows={6}
            className="font-mono text-xs"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button
            onClick={handleImport}
            disabled={!importValue.trim()}
            className="w-full"
          >
            <Upload className="h-4 w-4 mr-2" />
            Import Configuration
          </Button>
        </div>

        {/* Reset */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Reset Configuration</Label>
          <p className="text-sm text-muted-foreground">
            This will reset all branding settings to their default values.
          </p>
          <Button
            onClick={resetBranding}
            variant="destructive"
            className="w-full"
          >
            Reset to Default
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
