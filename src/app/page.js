import { HeroComposition } from '@/components/HeroComposition'
import { AboutUs } from '@/components/AboutUs'
import { OurTeam } from '@/components/OurTeam'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-20 w-full'>
      <HeroComposition />
      <AboutUs />
      <OurTeam />
    </div>
  )
}
