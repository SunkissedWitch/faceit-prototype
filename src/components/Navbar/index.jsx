import { Logo } from '@/components/Logo'
import { MAIN_LINKS } from './content'
import { MobileMenu } from '@/components/MobileMenu'

export const Navbar = () => {
  return (
    // <div className="navbar z-[8000] fixed top-0 px-2 sm:px-12 md:px-24 bg-base-100 bg-opacity-80">
    //     <div className='flex flex-auto flex-shrink-0'>
    //       <button className="btn btn-ghost px-2 sm:px-6 btn-lg">
    //         <Logo />
    //       </button>
    //     </div>
    //   <ul className='menu menu-horizontal px-2 sm:px-6 text-secondary'>
    //     {
    //       MAIN_LINKS.map((link, index) => {
    //         const { title, href } = link
    //         return (
    //           <li key={`MAIN-LINKS-${href}-${index}`} ><a href={href}>{title}</a></li>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>
    <div className="navbar z-[8000] fixed top-0 px-5 sm:px-10 md:px-14 lg:px-[7.5rem] bg-base-100 bg-opacity-80">
      <div className='w-full h-full absolute top-0 right-0 backdrop-blur-sm -z-[1]' />
      <div className="navbar-start flex flex-initial w-fit">
        <button className="btn btn-ghost px-2 sm:px-6 btn-lg -ml-2 sm:-ml-6">
          <Logo />
        </button>
      </div>
      <div className="navbar-end flex-grow">
        <div className="sm:hidden dropdown dropdown-end">
          <MobileMenu>
            {
              MAIN_LINKS.map((link, index) => {
                const { title, href } = link
                return (
                  <li key={`mobile-links-${href}-${index}`} ><a href={href}>{title}</a></li>
                )
              })
            }
          </MobileMenu>
        </div>
        <ul className='hidden sm:flex menu menu-horizontal px-2 sm:px-6 text-secondary'>
          {
            MAIN_LINKS.map((link, index) => {
              const { title, href } = link
              return (
                <li key={`desktop-links-${href}-${index}`} ><a href={href}>{title}</a></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}