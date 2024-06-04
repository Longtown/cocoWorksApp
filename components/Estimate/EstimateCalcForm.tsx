import React from 'react'
import StepTitle from './StepTitle'
import ForkListCard from '@/components/Cards/ForkliftCard'
import { DatePicker } from './DatePicker'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { forklifts } from '@/constants/contants'
import { format } from 'date-fns'

const EstimateCalcForm = ({
  className,
  params,
  setParams,
  setTotal,
  total,
}: {
  className: string
  params: EstimateParams
  setParams: (params: EstimateParams) => void
  setTotal: (total: number) => void
  total: number
}) => {
  React.useEffect(() => {
    const forklift = forklifts.find((forklift) => forklift.id === params.selectForkliftId)
    if (!forklift) return
    if (params.monthOrDay === '日') {
      setTotal(forklift.oneDayRentMoney * params.rentalPeriod)
    } else if (params.monthOrDay === '月') {
      setTotal(forklift.oneMonthRentMoney * params.rentalPeriod)
    }
  }, [params])
  return (
    <div className={className}>
      <StepTitle title="利用したいフォークリストを選択" step={1} />
      <div className="mt-8 flex flex-wrap gap-x-2 gap-y-8">
        {forklifts.map((forklift, index) => (
          <ForkListCard
            key={index}
            imgUrl={forklift.imgUrl}
            operatorOption={forklift.operatorOption}
            companyName={forklift.companyName}
            modelName={forklift.modelName}
            oneDayRentMoney={forklift.oneDayRentMoney.toLocaleString()}
            oneMonthRentMoney={forklift.oneMonthRentMoney.toLocaleString()}
            active={params.selectForkliftId == forklift.id}
            action={() => {
              setParams({ ...params, selectForkliftId: forklift.id })
            }}
          />
        ))}
      </div>

      <div className="my-10 border-t border-[#E0E0E0]"></div>

      <StepTitle title="使用開始予定日・使用期間を入力する" step={2} />
      <div className="mt-8 flex justify-between">
        <div>
          <p className="text-[20px] font-bold">
            <span className="algin-middle mr-2 inline-block h-4 w-4 rounded-sm bg-[#367F4C]"></span>
            使用開始予定日
          </p>
          <DatePicker className="mt-1.5" setParams={setParams} params={params} />
        </div>
        <div>
          <p className="text-[20px] font-bold">
            <span className="algin-middle mr-2 inline-block h-4 w-4 rounded-sm bg-[#367F4C]"></span>
            使用開始予定日
          </p>
          <div className="mt-1.5 flex gap-x-2">
            <Input
              type="number"
              placeholder="借りる日数"
              className="w-[270px]"
              onChange={(e) => setParams({ ...params, rentalPeriod: Number(e.target.value) })}
            />

            <Select onValueChange={(value) => setParams({ ...params, monthOrDay: value })}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="単位" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>単位を選択してください</SelectLabel>
                  <SelectItem value="日" defaultChecked>
                    日
                  </SelectItem>
                  <SelectItem value="月">月</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="my-10 border-t border-[#E0E0E0]"></div>

      <StepTitle title="運搬方法を選択する" step={3} />
      <RadioGroup
        defaultValue="運搬を依頼する"
        className="mt-8 flex"
        onValueChange={(value) => setParams({ ...params, transportationMethod: value })}
      >
        <div className="mr-20 flex items-center space-x-2">
          <RadioGroupItem value="運搬を依頼する" id="r1" />
          <Label htmlFor="r1" className="mt-0.5 text-[20px] font-bold">
            運搬を依頼する
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="自分で引き取りする" id="r2" />
          <Label htmlFor="r2" className="mt-0.5 text-[20px] font-bold">
            自分で引き取りする
          </Label>
        </div>
      </RadioGroup>

      <div className="my-10 border-t border-[#E0E0E0]"></div>

      <>
        <StepTitle title="オペレーター派遣の有無を選択する" step={4} />
        <RadioGroup
          defaultValue="オペレーター派遣を依頼する"
          className="mt-8 flex"
          onValueChange={(value) => setParams({ ...params, isAskOperator: value })}
        >
          <div className="mr-20 flex items-center space-x-2">
            <RadioGroupItem value="オペレーター派遣を依頼する" id="r1" />
            <Label htmlFor="r1" className="mt-0.5 text-[20px] font-bold">
              オペレーター派遣を依頼する
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="不要" id="r2" />
            <Label htmlFor="r2" className="mt-0.5 text-[20px] font-bold">
              不要
            </Label>
          </div>
        </RadioGroup>

        <div className="my-10 border-t bg-[#EFEFEF]">
          <p className="px-4 py-5 text-[#0A1C0F]">
            オペレーターへの依頼の詳細についてはこちらをご覧ください。
          </p>
        </div>
      </>

      <div className="my-10 border-t border-[#E0E0E0]"></div>

      <h3 className="text-[24px] font-semibold text-[#367F4C]">合計想定金額（税抜）</h3>
      <p className="text-[64px] font-bold leading-[64px]">{total.toLocaleString()}円〜</p>

      <div className="my-10 border-t border-[#E0E0E0]"></div>

      <div className="mx-auto flex max-w-[720px] flex-wrap">
        <div className="w-1/3">
          <p className="text-[18px] font-semibold">選択フォークリフト</p>
          <p>
            {forklifts.find((forklift) => forklift.id === params.selectForkliftId)?.companyName}
            {'  '}
            {forklifts.find((forklift) => forklift.id === params.selectForkliftId)?.modelName}
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-[18px] font-semibold">使用開始予定日</p>
          <p>{params.startDay && format(params.startDay, 'yyyy/MM/dd')}</p>
        </div>
        <div className="w-1/3">
          <p className="text-[18px] font-semibold">使用期間</p>
          <p>
            {params.rentalPeriod}
            {'  '}
            {params.monthOrDay}
          </p>
        </div>
        <div className="my-8 w-full border-t border-[#E0E0E0]"></div>
        <div className="w-1/3">
          <p className="text-[18px] font-semibold">運搬方法</p>
          <p>{params.transportationMethod}</p>
        </div>
        <div className="w-1/3">
          <p className="text-[18px] font-semibold">オペレーター派遣の有無</p>
          <p>{params.isAskOperator}</p>
        </div>
      </div>

      <div className="my-10 border-t border-[#E0E0E0]"></div>

      <button className="relative mb-32 mt-10 w-full rounded-sm bg-[#367F4C] py-4 text-[#fff]">
        <span className="text-[18px] font-semibold">この内容でお問い合わせする</span>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px] text-white">{'>'}</span>
      </button>
    </div>
  )
}

export default EstimateCalcForm
