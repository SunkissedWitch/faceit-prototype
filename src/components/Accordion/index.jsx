"use client"

import { useState, useRef, useEffect } from "react"
import { useInViewport } from 'react-in-viewport';
import { steps } from "./content"
import { AccordionItem } from "@/components/AccordionItem"

export const Accordion = () => {
  const [checked, setCheked] = useState(0)
  const myRef = useRef()
  const {
    inViewport,
    enterCount,
  } = useInViewport(myRef, { threshold: 0.5 })

  useEffect(() => {
    if (inViewport && enterCount === 1) {
      return setCheked('1')
    }
  }, [inViewport, enterCount])

  const switchChecked = (value) => {
    if (value === checked) {
      return setCheked(0)
    }
    return setCheked(value)
  }

  return (
    <div className="join join-vertical w-full rounded-none" ref={myRef}>
      <AccordionItem
        step={steps[0]}
        id={steps[0].id.toString()}
        isChecked={steps[0].id.toString() === checked}
        switchChecked={switchChecked}
      />

      {steps.slice(1).map((step) => {
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