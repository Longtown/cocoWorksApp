'use client'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import EstimateCalcForm from '@/components/Estimate/EstimateCalcForm'
import Sidebar from '@/components/Estimate/Sidebar'
import React from 'react'

const Page = () => {
  const [params, setParams] = React.useState<EstimateParams>({
    selectForkliftId: '',
    startDay: '',
    rentalPeriod: 0,
    transportationMethod: '運搬を依頼する',
    isAskOperator: 'オペレーター派遣を依頼する',
    monthOrDay: '',
  })
  const [total, setTotal] = React.useState(0)
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

      <div className="mx-auto mt-20 flex max-w-6xl justify-between">
        <EstimateCalcForm
          className="w-[800px]"
          params={params}
          setParams={setParams}
          setTotal={setTotal}
          total={total}
        />
        <Sidebar className="w-[272px]" params={params} total={total} />
      </div>
    </main>
  )
}

export default Page
