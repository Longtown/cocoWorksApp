'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function DatePicker({
  className,
  params,
  setParams,
}: React.HTMLAttributes<HTMLDivElement> & {
  params: EstimateParams
  setParams: (params: EstimateParams) => void
}) {
  const [date, setDate] = React.useState<Date>()

  React.useEffect(() => {
    if (date) {
      setParams({ ...params, startDay: date })
    }
  }, [date])

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
          >
            {date ? format(date, 'yyyy/MM/dd') : <span>日付を選択する</span>}{' '}
            <CalendarIcon className="ml-auto h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  )
}
