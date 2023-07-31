import './styles.css'
import { ClientButton } from './ClientButton'

export const HeroComposition = () => {
  return (
    <div className="hero mt-24 min-h-[13.0625rem] sm:min-h-[20rem] md:min-h-[26.5rem] xl:min-h-[32rem] bg-clip-content bg-cover bg-no-repeat hero__bg">
      <div className="hero-overlay dark:bg-transparent dark:mix-blend-normal dark:bg-opacity-100 bg-opacity-80 bg-base-100 mix-blend-lighten" />
      <div className="hero-content text-center py-6 px-0">
        <div className="max-w-3xl flex flex-col gap-y-[1.44rem] sm:gap-y-12 md:gap-y-14 xl:gap-y-20">
          <div className="md:-mb-5 text-lg leading-loose md:text-2xl md:leading-loose text-primary-content antialiased">
            Planning. <span className='text-primary'>Programming.</span> Result.
          </div>
          <div className="mb-5 text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl text-primary-content font-semibold antialiased flex flex-col w-full mx-auto justify-center gap-x-4">
            <span className='heading-line heading-line-first'>
              <span className='heading-line-gradient'>End-to-end Software</span>
            </span>
            <div className='flex flex-row justify-center gap-x-4'>
              <span className='heading-line heading-line-second'>
                <span className='heading-line-gradient'>Development</span>
              </span>
              <span className='heading-line heading-line-third'>
                <span className='heading-line-gradient'>Company</span>
              </span>
            </div>
          </div>
          <ClientButton />
        </div>
      </div>
    </div>
  )
}