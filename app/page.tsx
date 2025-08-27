import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI Chatbot{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Demo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our white-label chatbot solution. Built with Next.js 15,
            React 19, and powered by modern AI technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Real-time Chat</h3>
            <p className="text-sm text-muted-foreground">
              Instant responses with typing indicators and smooth animations
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              Works perfectly on desktop, tablet, and mobile devices
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">White Label Ready</h3>
            <p className="text-sm text-muted-foreground">
              Easily customize themes, colors, and branding for any client
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Experience Our AI?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Try our interactive chatbot demo and see how it can enhance your
              customer experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base px-8 py-3">
              <Link href="/chat">Try Live Demo</Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-base px-8 py-3"
            >
              <Link href="/dashboard">Customize Branding</Link>
            </Button>

            <Button variant="outline" size="lg" className="text-base px-8 py-3">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Additional Features Section */}
        <div id="features" className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Solution?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our white-label chatbot platform offers enterprise-grade features
              with the flexibility to match your brand perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🚀 Quick Integration</h3>
              <p className="text-muted-foreground">
                Deploy in minutes with our pre-built components and
                comprehensive documentation. No complex setup required.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🎨 Full Customization</h3>
              <p className="text-muted-foreground">
                Customize colors, fonts, layout, and branding to match your
                company's identity perfectly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">📱 Mobile First</h3>
              <p className="text-muted-foreground">
                Responsive design ensures your chatbot works flawlessly on all
                devices and screen sizes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">⚡ High Performance</h3>
              <p className="text-muted-foreground">
                Built with Next.js 15 and React 19 for lightning-fast
                performance and excellent user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Built with Next.js 15 • React 19 • TypeScript • Tailwind CSS •
            Shadcn/ui
          </p>
        </div>
      </div>
    </div>
  );
}
