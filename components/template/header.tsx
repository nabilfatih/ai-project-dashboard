import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 border-b bg-background backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl shrink-0 items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="flex items-center">
            <Link href="/" className="text-lg font-semibold tracking-tighter">
              AI Project
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}
