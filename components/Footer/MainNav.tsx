import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn('mx-auto flex max-w-6xl items-center justify-between', className)} {...props}>
      <Link href="#" className="text-white">
        ホーム
      </Link>
      <Link href="#" className="text-white">
        機種紹介
      </Link>
      <Link href="#" className="text-white">
        オペレータ派遣
      </Link>
      <Link href="#" className="text-white">
        対応エリア
      </Link>
      <Link href="#" className="text-white">
        料金見積もり
      </Link>
      <Link href="#" className="text-white">
        お問い合わせ
      </Link>
    </nav>
  )
}
