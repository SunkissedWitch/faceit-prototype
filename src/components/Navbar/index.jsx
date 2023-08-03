// "use client"

import { Logo } from '@/components/Logo'
import { MAIN_LINKS } from './content'
import { MobileMenu } from '@/components/MobileMenu'
import ScrollLink from '@/components/ScrollLink'

export const Navbar = () => {
  return (
    <div className="navbar z-[8000] fixed top-0 px-5 sm:px-10 md:px-14 lg:px-[7.5rem] bg-base-100 bg-opacity-80">
      <div className='w-full h-full absolute top-0 right-0 backdrop-blur-sm -z-[1]' />
      <div className="navbar-start flex flex-initial w-fit">
        <button className="btn btn-ghost px-2 sm:px-6 btn-lg -ml-2 sm:-ml-6 z-10">
          <Logo />
        </button>
      </div>
      <div className="navbar-end flex-grow">
        <MobileMenu />
        <ul className='hidden md:flex menu menu-horizontal px-2 md:px-6 text-secondary'>
          {
            MAIN_LINKS.map((link, index) => {
              const { title, href } = link
              return (
                <li key={`desktop-links-${href}-${index}`} ><ScrollLink href={href}>{title}</ScrollLink></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}