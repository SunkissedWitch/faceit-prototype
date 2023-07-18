import Image from "next/image"

export const PartnerItem = ({ partnerLogo, title }) => {
  return (
    <div className='flex flex-initial px-4 cursor-pointer mx-11 bg-base-100'>
      <Image className='h-[52px] w-full transition-colors grayscale hover:filter-none' src={partnerLogo} alt={title} />
    </div>
  )
}