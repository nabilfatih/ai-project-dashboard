import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import "@/styles/globals.css"
import "@/styles/config.css"

import type { Metadata, Viewport } from "next"

import { themes } from "@/lib/data/themes"
import { cn } from "@/lib/utils"

import { Toaster } from "@/components/ui/sonner"
import TailwindIndicator from "@/components/development/tailwind-indicator"
import Providers from "@/components/providers"

export const metadata: Metadata = {
  title: {
    template: "%s - AI Project",
    default: "AI Project"
  },
  description: "AI Project"
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: "resizes-visual",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          themes={themes}
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 flex-col overflow-hidden">
              {children}
            </main>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
