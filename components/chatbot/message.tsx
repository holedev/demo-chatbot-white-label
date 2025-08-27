"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useBranding } from "@/lib/contexts/branding-context";
import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

export function Message({
  content,
  isUser,
  timestamp,
  isTyping = false,
}: MessageProps) {
  const { branding } = useBranding();

  return (
    <div
      className={cn(
        "flex gap-3 max-w-4xl",
        isUser ? "flex-row-reverse" : "flex-row",
      )}
    >
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarImage src={isUser ? "/user-avatar.png" : branding.logoUrl} />
        <AvatarFallback
          className={cn(
            "text-xs font-medium",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted",
          )}
        >
          {isUser ? "U" : branding.chatbotName.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div
        className={cn(
          "flex flex-col gap-1",
          isUser ? "items-end" : "items-start",
        )}
      >
        <div
          className={cn(
            "rounded-lg px-3 py-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg break-words",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted",
          )}
        >
          {isTyping ? (
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
              </div>
            </div>
          ) : (
            <p className="text-sm whitespace-pre-wrap">{content}</p>
          )}
        </div>

        <span className="text-xs text-muted-foreground px-1">
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
