"use client"

import Marquee from "react-fast-marquee"
import { partnersList } from "./content"
import { PartnerItem } from "../PartnerItem"

export const Partners = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className='h-40 -mx-8 md:-mx-28 text-secondary text-opacity-80 text-center flex relative before:absolute before:h-full before:left-0 before:w-20 before:bg-gradient-to-r before:from-[30%] before:z-10 before:from-base-100 after:absolute after:h-full after:right-0 after:w-20 after:bg-gradient-to-l after:from-[30%] after:z-10 after:from-base-100'>
          <Marquee
            // pauseOnHover
          >
            {partnersList.map((partner) => (
              <PartnerItem key={`${partner.title}-${partner.id}`} partnerLogo={partner.source} title={partner.title} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  )
}