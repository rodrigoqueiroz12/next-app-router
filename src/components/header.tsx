import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold">
          devstore
        </Link>

        <form className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="size-5 text-zinc-500" />

          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="size-4" />
          <span className="text-sm font-medium">Cart (0)</span>
        </div>

        <div className="h-4 w-px bg-zinc-500" />

        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/rodrigoqueiroz12.png"
            width={24}
            height={24}
            alt=""
            className="size-6 rounded-full"
          />
        </Link>
      </div>
    </header>
  )
}
