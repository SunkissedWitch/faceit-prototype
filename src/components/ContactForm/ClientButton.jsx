"use client"

import { PrimaryButton } from "@/components/PrimaryButton"

export const ClientButton = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('Submit', e.target)
  }

  return (
    <PrimaryButton type='submit' className="px-0" title={'Submit'} onClick={handleClick} />
  )
}