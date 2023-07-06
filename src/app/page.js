import { HeroComposition } from '@/components/HeroComposition'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-12 w-full'>
      <HeroComposition />
    </div>
  )
}
