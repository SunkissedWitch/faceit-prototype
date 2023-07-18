import { HeroComposition } from '@/components/HeroComposition'
import { AboutUs } from '@/components/AboutUs'
import { OurTeam } from '@/components/OurTeam'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Partners } from '@/components/Partners'
import { ContactUs } from '@/components/ContactUs'

export default function Home() {
  return (
    <div className='container flex flex-col gap-y-32 w-full'>
      <HeroComposition />
      <AboutUs />
      {/* <OurTeam /> */}
      <Services />
      <Testimonials />
      <Partners />
      <ContactUs />
    </div>
  )
}
