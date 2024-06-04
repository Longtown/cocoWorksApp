import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const ForkliftCard = ({
  operatorOption,
  active,
  imgUrl,
  companyName,
  modelName,
  oneDayRentMoney,
  oneMonthRentMoney,
  action,
}: {
  operatorOption?: boolean
  active?: boolean
  imgUrl: string
  companyName: string
  modelName: string
  oneDayRentMoney: string
  oneMonthRentMoney: string
  action: () => void
}) => {
  return (
    <Card
      className={`relative h-[397px] w-[260px] overflow-hidden rounded-sm pt-4 text-[#0A1C0F] hover:border-[#367F4C] ${
        active ? 'border-[#367F4C]' : ''
      }`}
    >
      <div className="flex justify-between px-4">
        <Image src={imgUrl} alt="フォークリスト" width={104} height={104} className="rounded-sm" />
        <div className="flex flex-col justify-between">
          <div className="flex w-[104px] items-center justify-between rounded-sm bg-[#367F4C] px-4 py-2 text-[12px] font-semibold">
            <span className="text-white">スペック</span>
            <span className="text-white">{'>'}</span>
          </div>
          {operatorOption && (
            <div className="flex h-[56px] w-[104px] items-center justify-center rounded-sm bg-[#FFFD59] text-[12px] font-semibold">
              <span className="text-black">
                オペレーター
                <br />
                オプション有
              </span>
            </div>
          )}
        </div>
      </div>

      {/* カードのタイトル */}
      <div className="mt-5 px-4">
        <p className="text-sm font-semibold text-[#707070]">{companyName}</p>
        <h3 className="text-[24px] font-bold">{modelName}</h3>
      </div>

      {/* 一日レンタル */}
      <div className="mt-5 border-t border-[#EFEFEF] px-4 pt-3">
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-bold leading-[16px] text-[#707070]">
            一日
            <br />
            レンタル
          </p>
          <p className="text-[24px] font-bold">{oneDayRentMoney}円</p>
        </div>
      </div>

      {/* 一ヶ月レンタル */}
      <div className="mt-3 border-t border-[#EFEFEF] px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-bold leading-[16px] text-[#707070]">
            一日
            <br />
            レンタル
          </p>
          <p className="text-[24px] font-bold">{oneMonthRentMoney}円</p>
        </div>
      </div>

      <button
        className={`absolute bottom-0 left-0 right-0 h-[48px] bg-[#367F4C] px-4 ${
          !active ? 'text-white' : 'text-[#FFFD59]'
        }`}
        type="button"
        onClick={action}
      >
        選択する
      </button>
    </Card>
  )
}

export default ForkliftCard
