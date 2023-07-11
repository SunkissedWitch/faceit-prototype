import { DescriptionText } from "@/components/DescriptionText"
import { HeaderText } from "@/components/HeaderText"
import { Stats } from "@/components/Stats"
import { ClientButton } from "./ClientButton"

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-y-[4.5rem]">
      <div className="flex flex-col gap-y-5 justify-between mx-auto items-center">
        <HeaderText>About Us</HeaderText>
        <DescriptionText>By the numbers</DescriptionText>
      </div>
      <div>
        <Stats />
      </div>
      <ClientButton />
    </div>
  )
}