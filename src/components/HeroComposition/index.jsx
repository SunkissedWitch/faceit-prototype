import bg from 'public/Hero_Bg.svg'
import arrow from 'public/Arrow.svg'
import Image from 'next/image'

export const HeroComposition = () => {
  return (
    <div className="hero min-h-[26.5rem] bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg?.src})`}}>
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-center">
        <div className="max-w-3xl flex flex-col gap-y-5">
          <p className="mb-5 text-2xl">Planning. <span className='text-primary'>Programming.</span> Result.</p>
          <h1 className="mb-5 text-6xl capitalize font-semibold">End-to-end software <span className='bg-gradient-to-r from-primary to-[#038F00] bg-clip-text text-transparent'>development</span> company</h1>
          <button className="btn btn-ghost text-base font-normal leading-5 gap-x-2 max-w-max mx-auto">
            Contact Us
            <Image src={arrow} alt='' width={28} height={28} placeholder='empty' />
          </button>
        </div>
      </div>
    </div>
  )
}