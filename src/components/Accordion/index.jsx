"use client"

import { useState } from "react"
import { AccordionHeaderText } from "@/components/AccordionHeaderText"
import { AccordionDescriptionText } from "@/components/AccordionDescriptionText"
import { steps } from "./content"

export const Accordion = () => {
  const [checked, setCheked] = useState(0)
  const switchChecked = (e) => {
    const { value } = e?.target
    if (value === checked) {
      return setCheked(0)
    }
    return setCheked(value)
  }

  return (
    <div className="join join-vertical w-full rounded-none">
      {steps.map((step) => {
        const id = step.id.toString()
        const isChecked = id === checked

        return (
          <div key={`${id}-${step.title}`} className="collapse join-item border-y border-base-300">
            <input type="checkbox" name="my-accordion-4" checked={isChecked} onChange={switchChecked} value={id} />
            <div className="collapse-title duration-300 flex flex-row items-center px-1 py-8">
              <div className={`${isChecked ? 'text-secondary pl-3' : 'text-secondary-focus'} text-xl w-1/4 transition-all  duration-300`}>{step.id < 10 && '0'}{id}</div>
              <AccordionHeaderText active={isChecked}>
                {step.title.toLowerCase()}
              </AccordionHeaderText>
            </div>
            <div className="collapse-content duration-300">
              <div className='w-3/4 ml-auto flex flex-col gap-y-7 px-6 pb-14'>
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