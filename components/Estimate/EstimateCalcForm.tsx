import React from 'react'
import StepTitle from './StepTitle'
import ForkListCard from '@/components/Cards/ForkliftCard'

const EstimateCalcForm = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <StepTitle title="利用したいフォークリストを選択" step={1} className="mt-20" />
      <ForkListCard />
    </div>
  )
}

export default EstimateCalcForm
