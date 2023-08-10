"use client"

import { HeaderText } from "@/components/HeaderText"
import { ReviewCard } from "@/components/ReviewCard"
import { REVIEWS } from "./content"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { PrimaryButton } from "../PrimaryButton"

export const Testimonials = () => {
  const isMobile = useMediaQuery({ maxWidth: '767px'})
  const [amount, setAmount] = useState(2)
  const [currentReviews, setCurrentReviews] = useState(REVIEWS.slice(0, 2))

  useEffect(() => {
    if (isMobile) {
      setAmount(2)
      setCurrentReviews(REVIEWS.slice(0, 2))
      return
    }
    setAmount(4)
    setCurrentReviews(REVIEWS.slice(0, 4))
  }, [isMobile])

  const sliceNext = (start) => {
    const end = start + amount
    return REVIEWS.slice(start, end)
  }

  const showMoreReviews = () => {
    const nextReviews = sliceNext(currentReviews.length)
    return setCurrentReviews((initState) => ([
      ...initState,
      ...nextReviews
    ]))
  }

  return (
    <>
      <div className='flex flex-col gap-y-8 pt-20 mt-4 sm:mt-0 sm:pt-32' id="testimonials">
        <HeaderText className='mb-5 sm:mb-9'>What our clients are saying</HeaderText>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12'>
          {
            currentReviews.map((review) => (
              <ReviewCard key={`review-card-${review.id}`} review={review} />
            ))
          }
        </div>
        <PrimaryButton title={'Learn more Testimonials'} onClick={showMoreReviews} className={'px-0'} />
      </div>
    </>
  )
}