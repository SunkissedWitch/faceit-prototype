"use client"

import './styles.css'
import { AccordionHeaderText } from "@/components/AccordionHeaderText"
import { AccordionDescriptionText } from "@/components/AccordionDescriptionText"
import { AccordionAdorement } from '@/components/AccordionAdorement'

export const AccordionItem = ({ step, isChecked, switchChecked, id }) => {
  const checked = isChecked ? 'item-checked' : ''
  return (
    <div className={`accordion-container ${checked} flex flex-col join-item border-y border-base-300`}>
      <div className='accordion-title flex flex-row items-stretch px-1 py-3 sm:py-4 md:py-5' onClick={() => switchChecked(id)}>
        <AccordionAdorement checked={isChecked}>{id}</AccordionAdorement>
        <AccordionHeaderText active={isChecked} className={'transition-colors duration-[600ms] text-ellipsis'}>
          {step.title.toLowerCase()}
        </AccordionHeaderText>
      </div>
      <div className='accordion-item-content'>
        <div className='w-3/4 ml-auto flex flex-col gap-y-7 px-6'>
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
