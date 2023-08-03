import { Accordion } from "@/components/Accordion"
import { DescriptionText } from "@/components/DescriptionText"
import { HeaderText } from "@/components/HeaderText"

export const Services = () => {
  return (
    <section id="services" className="flex flex-col w-full gap-y-7 sm:gap-y-28">
      <div className='flex flex-col sm:flex-row justify-between gap-5 pt-20 sm:pt-32'>
        <HeaderText>Services</HeaderText>
        <DescriptionText className='sm:w-3/4 font-light'>Our specialists use not only hi-tech programming approaches, but also monitor the latest trends being up to date and implement the best solutions into our work.</DescriptionText>
      </div>
      <div>
        <Accordion />
      </div>
    </section>
  )
}