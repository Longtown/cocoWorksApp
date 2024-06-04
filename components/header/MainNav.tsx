import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn('flex items-center', className)} {...props}>
      <Link href="#" className="mr-7 font-semibold transition-colors">
        ホーム
      </Link>
      <Link href="#" className="mr-7 font-semibold transition-colors">
        機種紹介
      </Link>
      <Link href="#" className="mr-7 font-semibold transition-colors">
        オペレータ派遣
      </Link>
      <Link href="#" className="mr-7 font-semibold transition-colors">
        対応エリア
      </Link>
      <Link href="#" className="mr-7 font-semibold transition-colors">
        お問い合わせ
      </Link>
      <Link
        href="#"
        className="flex h-full w-[234px] items-center justify-center bg-[#367F4C] font-semibold text-white transition-colors"
      >
        料金見積もりはこちら
      </Link>
    </nav>
  )
}
