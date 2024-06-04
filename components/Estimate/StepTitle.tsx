import React from 'react'
import Image from 'next/image'

const StepTitle = ({ title, step, className }: { title: string; step: number; className?: string }) => {
  return (
    <div className={`flex items-center text-[28px] font-semibold ${className}`}>
      <Image
        src={`/images/estimateStep${step}.svg`}
        alt="料金見積もり"
        width={42}
        height={50}
        className="mr-2 align-middle"
      />
      <span className="mt-1 leading-8">{title}</span>
    </div>
  )
}

export default StepTitle
