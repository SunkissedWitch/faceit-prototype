"use client"

import { PrimaryButton } from "@/components/PrimaryButton"

export const ClientButton = () => {
  const handleClick = (e) => console.log('mEET THE TEAM'.toLowerCase(), e.target)

  return (
    <PrimaryButton title={'mEET THE TEAM'} onClick={handleClick} className={'px-0'} />
  )
}