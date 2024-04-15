import Link from "next/link"

import FooterArt from "@/components/template/footer-art"
import ThemeToggle from "@/components/theme/toggle"

export default function Footer() {
  return (
    <footer className="border-t bg-card backdrop-blur-xl">
      <div className="pt-24">
        <div className="mx-auto mb-6 w-full max-w-6xl shrink-0 space-y-2 border-b px-4 pb-6">
          <div className="relative space-y-6">
            <div className="flex flex-col gap-1">
              <Link href="/" className="flex w-fit items-center">
                <h1 className="flex items-center text-2xl font-semibold tracking-tighter">
                  AI Project
                </h1>
              </Link>
              <h2 className="tracking-tight">Vehicle Assembly</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4">
              <div className="flex flex-col">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl shrink-0 space-y-2 px-4">
          <div className="grid grid-cols-3">
            <div className="col-span-2 grid h-fit pt-2 sm:col-span-1">
              <h1 className="mb-1 font-medium tracking-tight">
                AI Project © {new Date().getFullYear()}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <FooterArt />
    </footer>
  )
}
