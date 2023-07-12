import { HeaderText } from "@/components/HeaderText"
import { ReviewCard } from "@/components/ReviewCard"

export const Testimonials = () => {
  return (
    <>
      <div className='flex flex-col gap-y-8'>
        <HeaderText className='mb-9'>What our clients are saying</HeaderText>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </>
  )
}