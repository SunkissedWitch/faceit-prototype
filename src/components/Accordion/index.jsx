"use client"

import { useMediaQuery } from "react-responsive";
import { DesktopAccordion } from "./DesktopAccordion";
import { MobileAccordion } from "./MobileAccordion";
import { useEffect, useState } from "react";

export const Accordion = () => {
  const [show, setShow] = useState(false)
  const isMobileOrTablet = useMediaQuery({ maxWidth: '1280px'})

  useEffect(() => setShow(true), [])

  return (
    <>
      {isMobileOrTablet && show ? <MobileAccordion /> : <DesktopAccordion />}
    </>
  )
}