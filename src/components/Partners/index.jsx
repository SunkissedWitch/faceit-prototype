"use client"

import Marquee from "react-fast-marquee"
import { partnersList } from "./content"
import { PartnerItem } from "../PartnerItem"

export const Partners = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 pt-32">
        <div className='h-40 -mx-5 sm:-mx-10 md:-mx-14 lg:-mx-28 text-secondary text-opacity-80 text-center flex relative before:absolute before:h-full before:left-0 before:w-5 sm:before:w-10 md:before:w-14 lg:before:w-20 before:bg-gradient-to-r before:from-[30%] before:z-10 before:from-base-100 after:absolute after:h-full after:right-0 after:w-5 sm:after:w-10 md:after:w-14 lg:after:w-20 after:bg-gradient-to-l after:from-[30%] after:z-10 after:from-base-100'>
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