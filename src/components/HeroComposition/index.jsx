import bg from 'public/Hero_Bg.svg'
import './styles.css'
import { ClientButton } from './ClientButton'

export const HeroComposition = () => {
  // ToDo: add to light theme:
  // background-color: #fff;
  // background-blend-mode: difference;
  return (
    <div className="hero mt-24 min-h-[26.5rem] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${bg?.src})` }}>
      <div className="hero-overlay dark:bg-transparent dark:mix-blend-normal bg-opacity-80 bg-base-100 mix-blend-lighten" />
      <div className="hero-content text-center py-6">
        <div className="max-w-3xl flex flex-col gap-y-5">
          <div className="mb-5 text-2xl text-primary-content antialiased">
            Planning. <span className='text-primary'>Programming.</span> Result.
          </div>
          <div className="mb-5 text-4xl md:text-5xl lg:text-6xl text-primary-content font-semibold antialiased flex flex-row flex-wrap mx-auto justify-center gap-x-4">
            <span className='heading-line heading-line-first'>
              <span className='heading-line-gradient'>End-to-end Software</span>
            </span>
            <span className='heading-line heading-line-second'>
              <span className='heading-line-gradient'>Development</span>
            </span>
            <span className='heading-line heading-line-third'>
              <span className='heading-line-gradient'>Company</span>
            </span>
          </div>
          <ClientButton />
        </div>
      </div>
    </div>
  )
}