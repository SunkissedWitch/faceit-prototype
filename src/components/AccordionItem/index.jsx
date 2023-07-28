"use client"

import './styles.css'
import { AccordionHeaderText } from "@/components/AccordionHeaderText"
import { AccordionDescriptionText } from "@/components/AccordionDescriptionText"
import { AccordionAdorement } from '@/components/AccordionAdorement'

export const AccordionItem = ({ step, isChecked, switchChecked, id }) => {
  const checked = isChecked ? 'item-checked' : ''
  return (
    <div className={`accordion-container ${checked} max-h-[5.62rem] md:max-h-[7.9rem] flex flex-col join-item border-y border-base-300`}>
      <div className='accordion-title min-h-[5.62rem] md:min-h-[7.8rem] flex flex-row items-center justify-between gap-x-2 sm:gap-x-8 px-1 py-3 sm:py-4 md:py-8' onClick={() => switchChecked(id)}>
        <AccordionAdorement checked={isChecked}>{id}</AccordionAdorement>
        <AccordionHeaderText active={isChecked} className={'transition-colors duration-[600ms] text-ellipsis'}>
          {step.title.toLowerCase()}
        </AccordionHeaderText>
      </div>
      <div className='accordion-item-content'>
        <div className='sm:w-5/6 md:w-4/5 lg:w-3/4 sm:ml-auto flex flex-col gap-y-7 sm:px-8'>
          <div className='flex flex-col gap-y-2 content-main-text'>
            {step.mainText?.map((row, index) => (
              <AccordionDescriptionText key={`service-main-text-${index}`}>{row}</AccordionDescriptionText>
            ))}
          </div>
          <div className='flex flex-col gap-y-2 pb-14 content-secondary-text'>
            {step.secondaryText?.map((row, index) => (
              <AccordionDescriptionText key={`service-secondary-text-${index}`} className='text-secondary'>{row}</AccordionDescriptionText>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
