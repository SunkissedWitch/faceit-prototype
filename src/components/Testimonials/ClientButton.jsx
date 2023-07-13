"use client"

import { PrimaryButton } from "@/components/PrimaryButton"

export const ClientButton = () => {
  const handleClick = (e) => console.log('Learn more Testimonials', e.target)

  return (
    <PrimaryButton title={'Learn more Testimonials'} onClick={handleClick} className={'px-0'} />
  )
}