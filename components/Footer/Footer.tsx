import React from 'react'
import { MainNav } from './MainNav'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black">
      <MainNav className="pt-20" />
      <div className="mx-auto flex max-w-6xl justify-between py-20">
        <div className="flex">
          <Image
            src="/images/footerLogo.svg"
            alt="logo"
            width={252.27}
            height={80}
            priority
            className="mr-8 h-auto"
          />
          <div className="flex h-20 flex-col justify-between text-white">
            <p>〒984-0032</p>
            <p>宮城県仙台市若林区荒井4丁目27-7</p>
            <p>TEL:022-766-8228/FAX:022-766-8227</p>
          </div>
        </div>

        <Link
          className="flex h-[72px] w-[226px] items-center justify-center bg-white font-semibold text-[#367F4C]"
          href="#"
        >
          お問い合わせはこちら
        </Link>
      </div>

      <div className="mx-auto max-w-6xl border-t border-[#BABABA]">
        <div className="mx-auto flex max-w-6xl justify-between py-4 text-[#BABABA]">
          <p>©︎ 2024 レンタルフォークリフト.com</p>
          <p>プライバシーポリシー</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
