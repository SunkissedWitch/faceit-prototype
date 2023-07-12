"use client"

import { useState } from "react"
import { AccordionHeaderText } from "@/components/AccordionHeaderText"
import { AccordionDescriptionText } from "@/components/AccordionDescriptionText"
import { steps } from "./content"

export const Accordion = () => {
  const [checked, setCheked] = useState(0)
  const switchChecked = (key) => setCheked(key)

  return (
    <div className="join join-vertical w-full rounded-none">
      {steps.map((step) => {

        const isChecked = step.id === checked

        return (
          <div key={`${step.id}-${step.title}`} className="collapse join-item border-y border-base-300">
            <input type="radio" name="my-accordion-4" checked={isChecked} onChange={() => switchChecked(step.id)} />
            <div className="collapse-title flex flex-row items-center px-1">
              <div className={`${isChecked ? 'text-secondary pl-3' : 'text-secondary-focus'} text-xl w-1/4 transition-all`}>{step.id < 10 && '0'}{step.id}</div>
              <AccordionHeaderText active={isChecked}>
                {step.title.toLowerCase()}
              </AccordionHeaderText>
            </div>
            <div className="collapse-content">
              <div className='w-3/4 ml-auto flex flex-col gap-y-7 px-6'>
                <div className='flex flex-col gap-y-2'>
                  {step.mainText?.map((row, index) => (
                    <AccordionDescriptionText key={`service-main-text-${index}`}>{row}</AccordionDescriptionText>
                  ))}
                </div>
                <div className='flex flex-col gap-y-2'>
                  {step.secondaryText?.map((row, index) => (
                    <AccordionDescriptionText key={`service-secondary-text-${index}`} className='text-secondary'>{row}</AccordionDescriptionText>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}