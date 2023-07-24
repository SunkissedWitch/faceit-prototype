import { Accordion } from "@/components/Accordion"
import { DescriptionText } from "@/components/DescriptionText"
import { HeaderText } from "@/components/HeaderText"

export const Services = () => {
  return (
    <section id="services" className="flex flex-col w-full gap-y-28">
      <div className='flex flex-row justify-between gap-5 pt-32'>
        <HeaderText>Services</HeaderText>
        <DescriptionText className='w-3/4 font-light'>Our specialists use not only hi-tech programming approaches, but also monitor the latest trends being up to date and implement the best solutions into our work.</DescriptionText>
      </div>
      <div>
        <Accordion />
      </div>
    </section>
  )
}