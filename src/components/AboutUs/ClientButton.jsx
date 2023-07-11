"use client"

import { PrimaryButton } from "@/components/PrimaryButton"

export const ClientButton = () => {
  const handleClick = (e) => console.log('Get started today', e.target)

  return (
    <PrimaryButton className="mx-auto" title={'Get started today'} onClick={handleClick}/>
  )
}