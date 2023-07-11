"use client"

import { PrimaryButton } from "@/components/PrimaryButton"

export const ClientButton = () => {
  const handleClick = (e) => console.log(e.target)

  return (
    <PrimaryButton className="mx-auto" title={'Contact Us'} onClick={handleClick}/>
  )
}