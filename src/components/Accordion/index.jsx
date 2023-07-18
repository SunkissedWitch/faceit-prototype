"use client"

import { useState, useRef, useEffect } from "react"
import { steps } from "./content"
import { AccordionItem } from "@/components/AccordionItem"

export const Accordion = () => {
  const [checked, setCheked] = useState(0)
  const firstHover = useRef(0)
  const ref = useRef()

  useEffect(() => {
    console.log('effect')
    const handleHover = async (event) => {
      console.log('firstHover', firstHover)
      if (firstHover.current === 0) {
        firstHover.current = 1
        return setCheked('1')
      }
    };

    const element = ref.current;
    console.log('element', element)

    element.addEventListener('mouseenter', handleHover);

    return () => {
      element.removeEventListener('mouseenter', handleHover);
    }
  }, []);

  const switchChecked = (e) => {
    const { value } = e?.target
    if (value === checked) {
      return setCheked(0)
    }
    return setCheked(value)
  }

  return (
    <div className="join join-vertical w-full rounded-none">
      <AccordionItem
        step={steps[0]}
        id={steps[0].id}
        isChecked={steps[0].id.toString() === checked}
        switchChecked={switchChecked}
        ref={ref}
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