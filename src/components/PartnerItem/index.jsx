import Image from "next/image"

export const PartnerItem = ({ partnerLogo, title }) => {
  return (
    <div className='flex flex-initial px-4 cursor-pointer mx-6 bg-base-100'>
      <Image className='h-[52px] w-full transition-colors grayscale brightness-200 contrast-0 hover:contrast-50' src={partnerLogo} alt={title} />
    </div>
  )
}