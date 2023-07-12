import { Accordion } from "@/components/Accordion"
import { DescriptionText } from "@/components/DescriptionText"
import { HeaderText } from "@/components/HeaderText"

export const Services = () => {
  return (
    <>
      <div className='flex flex-row justify-between gap-5'>
        <HeaderText>Services</HeaderText>
        <DescriptionText className='w-3/4 font-light'>Our specialists use not only hi-tech programming approaches, but also monitor the latest trends being up to date and implement the best solutions into our work.</DescriptionText>
      </div>
      <div>
        <Accordion />
      </div>
    </>
  )
}