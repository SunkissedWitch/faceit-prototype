import { HeaderText } from "@/components/HeaderText"
import { ReviewCard } from "@/components/ReviewCard"
import { REVIEWS } from "./content"
import { ClientButton } from "./ClientButton"

export const Testimonials = () => {
  return (
    <>
      <div className='flex flex-col gap-y-8'>
        <HeaderText className='mb-9'>What our clients are saying</HeaderText>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12'>
          {
            REVIEWS.map((review) => (
              <ReviewCard key={`review-card-${review.id}`} review={review} />
            ))
          }
        </div>
        <ClientButton />
      </div>
    </>
  )
}