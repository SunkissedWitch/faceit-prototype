"use client"

import { PrimaryButton } from "@/components/PrimaryButton"

export const ClientButton = () => {
  const handleClick = () => {
    const elem = document.getElementById('contacts');
    elem.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <PrimaryButton className="mx-auto mt-8 sm:mt-2" title={'Get started today'} onClick={handleClick}/>
  )
}
