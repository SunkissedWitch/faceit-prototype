"use client"

import { PrimaryButton } from "../PrimaryButton"

export const ClientButton = () => {
  const handleClick = (e) => console.log(e.target)

  return (
    <PrimaryButton className="mx-auto" title={'Contact Us'} onClick={handleClick}/>
  )
}