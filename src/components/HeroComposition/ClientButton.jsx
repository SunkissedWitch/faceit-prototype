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
    <PrimaryButton className="mx-auto" title={'Contact Us'} onClick={handleClick}/>
  )
}