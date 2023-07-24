import { Logo } from '@/components/Logo'

export const Navbar = () => {
  return (
    <div className="navbar z-[8000] fixed top-0 px-2 sm:px-12 md:px-24 bg-base-100 bg-opacity-80">
        <div className='flex flex-auto flex-shrink-0'>
          <button className="btn btn-ghost px-2 sm:px-6 btn-lg">
            <Logo />
          </button>
        </div>
      <ul className='menu menu-horizontal px-2 sm:px-6 text-secondary'>
        <li><a href='#about_us'>About us</a></li>
        <li><a href='#services'>Services</a></li>
        {/* <li><a href='#'>Portfolio</a></li> */}
        {/* <li><a href='#'>How we work</a></li> */}
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>
    </div>
  )
}