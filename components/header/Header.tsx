import React from 'react'
import Image from 'next/image'
import { MainNav } from './MainNav'

const Header = () => {
  return (
    <header className="mx-auto flex h-[88px] max-w-[1440px] items-center">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={255.11}
        height={24}
        priority
        className="h-auto w-auto"
      />
      <div className="ml-auto flex h-full items-center space-x-4">
        <MainNav className="h-full" />
      </div>
    </header>
  )
}

export default Header
