'use client'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import EstimateCalcForm from '@/components/Estimate/EstimateCalcForm'
import Sidebar from '@/components/Estimate/Sidebar'
import React from 'react'

const page = () => {
  const [params, setParams] = React.useState<EstimateParams>({
    id: '',
  })
  const breadcrumbItems = [
    { name: 'ホーム', href: '/' },
    { name: '料金見積もり', href: '/estimate' },
  ]
  return (
    <main>
      <div className="flex h-[207px] w-full max-w-[100vw] flex-col justify-center bg-[#FFFD59]">
        <h4 className="text-center text-[24px] font-semibold text-[#367F4C]">Estimate</h4>
        <h1 className="text-center text-[48px] font-semibold">料金見積もり</h1>
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mx-auto flex max-w-6xl justify-between">
        <EstimateCalcForm className="w-[800px]" />
        <Sidebar className="w-[272px]" />
      </div>
    </main>
  )
}

export default page
