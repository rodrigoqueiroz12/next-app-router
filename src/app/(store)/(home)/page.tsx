import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/@types/product'
import { api } from '@/data/api'
import { toCurrency } from '@/utils/to-currency'

async function getFeaturedProducts(): Promise<Product[]> {
  const res = await api('/products/featured', {
    cache: 'no-store',
  })

  return await res.json()
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[714px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={'/images'.concat(highlightedProduct.image)}
          width={860}
          height={860}
          quality={100}
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[17.5rem] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {toCurrency(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            src={'/images'.concat(product.image)}
            width={445}
            height={445}
            quality={60}
            alt=""
            className="transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-10 right-10 flex h-12 max-w-[17.5rem] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {toCurrency(product.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
