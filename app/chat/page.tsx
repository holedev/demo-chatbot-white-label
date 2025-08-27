import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ChatInterface } from "@/components/chatbot";
import { BrandingProvider } from "@/lib/contexts/branding-context";

export default function ChatPage() {
  return (
    <BrandingProvider>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        {/* Navigation Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Demo Landing
            </Link>
          </div>
        </header>

        {/* Chat Application */}
        <main className="p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
                AI Chat Assistant
              </h1>
              <p className="text-muted-foreground">
                Start a conversation with our AI assistant
              </p>
            </div>

            <ChatInterface className="shadow-2xl" />
          </div>
        </main>
      </div>
    </BrandingProvider>
  );
}
