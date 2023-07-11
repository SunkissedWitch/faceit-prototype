import { DescriptionText } from "@/components/DescriptionText"
import { HeaderText } from "@/components/HeaderText"
import { ClientButton } from "./ClientButton"

const text = {
  title: 'Our Team',
  desc: `We’ve built close partnership with numerous clients all over the world – from small firms and private customers to big companies and corporations.`
}

export const OurTeam = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <HeaderText>{text.title}</HeaderText>
        <DescriptionText className='w-[80%]'>{text.desc}</DescriptionText>
        <ClientButton />
        <div className='border border-secondary border-opacity-30 h-80 p-24 -mx-28 text-secondary text-opacity-60 text-center'>
          team slider
        </div>
      </div>
    </>
  )
}
