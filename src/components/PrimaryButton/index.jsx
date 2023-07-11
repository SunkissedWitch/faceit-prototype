import arrow from 'public/Arrow.svg'
import Image from 'next/image'

export const PrimaryButton = ({ title, className, ...props }) => {
  return (
    <button
      {...props}
      className={`btn btn-ghost text-base text-primary font-normal leading-5 gap-x-2 max-w-max ${className || ''}`}
    >
      {title}
      <Image src={arrow} alt='' width={28} height={28} placeholder='empty' />
    </button>
  )
}

