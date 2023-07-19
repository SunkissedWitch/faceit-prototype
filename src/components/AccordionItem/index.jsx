"use client"

import { AccordionHeaderText } from "@/components/AccordionHeaderText"
import { AccordionDescriptionText } from "@/components/AccordionDescriptionText"

export const AccordionItem = ({ step, isChecked, switchChecked, id }) => {
  return (
    <div className="collapse ease-in duration-[600ms] join-item border-y border-base-300">
      <input type="checkbox" name="services-accordion" checked={isChecked} onChange={switchChecked} value={id} />
      <div className="collapse-title">
        <div className="flex flex-row items-center px-1">
          <div className={`${isChecked ? 'text-secondary' : 'text-secondary-focus'} text-xl w-1/4 transition-colors duration-[600ms]`}>{step.id < 10 && '0'}{id}</div>
          <AccordionHeaderText active={isChecked} className={'transition-colors duration-[600ms]'}>
            {step.title.toLowerCase()}
          </AccordionHeaderText>
        </div>
      </div>
      <div className="collapse-content w-3/4 ml-auto flex flex-col gap-y-7 px-6">
        {/* <div className='w-3/4 ml-auto flex flex-col gap-y-7 px-6 pb-14'> */}
          <div className='flex flex-col gap-y-2'>
            {step.mainText?.map((row, index) => (
              <AccordionDescriptionText key={`service-main-text-${index}`}>{row}</AccordionDescriptionText>
            ))}
          </div>
          <div className='flex flex-col gap-y-2 pb-14'>
            {step.secondaryText?.map((row, index) => (
              <AccordionDescriptionText key={`service-secondary-text-${index}`} className='text-secondary'>{row}</AccordionDescriptionText>
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}
