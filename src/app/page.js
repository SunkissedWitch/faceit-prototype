import { HeroComposition } from '@/components/HeroComposition'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Partners } from '@/components/Partners'
import { ContactUs } from '@/components/ContactUs'

export default function Home() {
  return (
    <div className='container flex flex-col w-full'>
      <HeroComposition />
      <AboutUs />
      <Services />
      <Testimonials />
      {/* <Partners /> */}
      <ContactUs />
    </div>
  )
}
