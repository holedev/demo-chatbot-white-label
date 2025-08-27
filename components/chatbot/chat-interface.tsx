"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatHeader } from "./chat-header";
import { Message } from "./message";
import { ChatInput } from "./chat-input";
import { useBranding } from "@/lib/contexts/branding-context";

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  className?: string;
}

// Sample responses for demo
const sampleResponses = [
  "Hello! I'm your AI assistant. How can I help you today?",
  "That's a great question! Let me think about that for a moment.",
  "I'd be happy to help you with that. Can you provide more details?",
  "Based on what you've told me, here are some suggestions...",
  "Is there anything else you'd like to know about this topic?",
  "I understand your concern. Let me explain this step by step.",
  "That's an interesting perspective! Here's what I think...",
  "Thanks for sharing that information. It helps me understand better.",
];

export function ChatInterface({ className }: ChatInterfaceProps) {
  const { branding } = useBranding();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: branding.welcomeMessage,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update initial message when branding changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length > 0 && prev[0].id === "1") {
        const updated = [...prev];
        updated[0] = {
          ...updated[0],
          content: branding.welcomeMessage,
        };
        return updated;
      }
      return prev;
    });
  }, [branding.welcomeMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate API call delay
    setTimeout(
      () => {
        const randomResponse =
          sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    ); // Random delay between 1-3 seconds
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        content: branding.welcomeMessage,
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setIsTyping(false);
  };

  return (
    <Card
      className={`flex flex-col h-[600px] w-full max-w-4xl mx-auto ${className}`}
    >
      <ChatHeader onClearChat={handleClearChat} />

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              content={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}

          {isTyping && (
            <Message
              content=""
              isUser={false}
              timestamp={new Date()}
              isTyping={true}
            />
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </Card>
  );
}
