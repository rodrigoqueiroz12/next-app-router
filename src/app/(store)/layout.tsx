import { Suspense } from 'react'

import { Header } from '@/components/header'

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[75rem] grid-rows-[min-content_max-content] gap-5 px-10 py-8">
      <Suspense>
        <Header />

        {children}
      </Suspense>
    </div>
  )
}
