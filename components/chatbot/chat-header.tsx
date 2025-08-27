"use client";

import { MessageSquare, MoreVertical, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBranding } from "@/lib/contexts/branding-context";

interface ChatHeaderProps {
  title?: string;
  subtitle?: string;
  isOnline?: boolean;
  onClearChat?: () => void;
}

export function ChatHeader({
  title,
  subtitle = "Online now",
  isOnline = true,
  onClearChat,
}: ChatHeaderProps) {
  const { branding } = useBranding();

  // Use branding values as defaults if not explicitly provided
  const displayTitle = title || branding.chatbotName;
  const displaySubtitle = subtitle;

  return (
    <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary overflow-hidden">
          {branding.logoUrl ? (
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${branding.logoUrl})` }}
            />
          ) : (
            <MessageSquare className="h-5 w-5 text-primary-foreground" />
          )}
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-sm">{displayTitle}</h2>
          <div className="flex items-center gap-2">
            <Badge
              variant={isOnline ? "default" : "secondary"}
              className="text-xs px-2 py-0"
            >
              {isOnline ? "Online" : "Offline"}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {displaySubtitle}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {onClearChat && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearChat}
            className="h-8 w-8 p-0"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Clear chat</span>
          </Button>
        )}

        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </div>
  );
}
