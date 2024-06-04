import { forklifts } from '@/constants/contants'
import { format } from 'date-fns'
import React from 'react'

const Sidebar = ({
  className,
  params,
  total,
}: {
  className: string
  params: EstimateParams
  total: number
}) => {
  return (
    <div className={className}>
      <p className="text-[18px] font-semibold">選択フォークリフト</p>
      <p className="text-[18px]">
        {forklifts.find((forklift) => forklift.id === params.selectForkliftId)?.companyName}
        {'  '}
        {forklifts.find((forklift) => forklift.id === params.selectForkliftId)?.modelName}{' '}
      </p>

      <div className="my-5 border-t border-[#E0E0E0]"></div>

      <p className="text-[18px] font-semibold">使用開始予定日</p>
      <p className="text-[18px]">{params.startDay && format(params.startDay, 'yyyy/MM/dd')}</p>

      <div className="my-5 border-t border-[#E0E0E0]"></div>

      <p className="text-[18px] font-semibold">使用期間</p>
      <p className="text-[18px]">
        {params.rentalPeriod}
        {'  '}
        {params.monthOrDay}
      </p>

      <div className="my-5 border-t border-[#E0E0E0]"></div>

      <p className="text-[18px] font-semibold">運搬方法</p>
      <p className="text-[18px]">{params.transportationMethod}</p>

      <div className="my-5 border-t border-[#E0E0E0]"></div>

      <p className="text-[18px] font-semibold">オペレーター派遣の有無</p>
      <p className="text-[18px]">{params.isAskOperator}</p>

      <div className="my-5 border-t border-[#E0E0E0]"></div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#367F4C]">合計想定金額（税抜）</h3>
        <p className="text-[28px] font-bold">{total.toLocaleString()}円〜</p>

        <button className="relative mb-32 mt-5 w-full rounded-sm bg-[#367F4C] py-4 text-[#fff]">
          <span className="text-[18px] font-semibold">この内容でお問い合わせする</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px] text-white">{'>'}</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
