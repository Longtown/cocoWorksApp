import React from 'react'
import Link from 'next/link'

type BreadcrumbItem = {
  name: string
  href: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="mx-auto flex w-full max-w-[100vw] items-center justify-center bg-[#367F4C] py-2">
      <div className="mx-auto w-full max-w-6xl">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.href} className="mr-3 text-white">
              {item.name}
            </Link>
            {index < items.length - 1 && <span className="mr-3 text-white">{'>'}</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Breadcrumb
