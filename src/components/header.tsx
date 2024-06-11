import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

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
