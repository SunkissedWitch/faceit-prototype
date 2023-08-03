"use client"

import { useState } from "react"
import { AccordionItem } from "@/components/AccordionItem"
import { steps } from './content'

export const MobileAccordion = () => {
  const [checked, setCheked] = useState('1')

  const switchChecked = (value) => {
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
          <AccordionItem
            key={`${id}-${step.title}`}
            step={step}
            id={id}
            isChecked={isChecked}
            switchChecked={switchChecked}
          />
        )
      })}
    </div>
  )
}