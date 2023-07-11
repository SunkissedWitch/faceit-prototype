import { Logo } from '@/components/Logo'

export const Navbar = () => {
  return (
    <div className="navbar z-[8000] sticky top-0 px-24 bg-base-100 bg-opacity-80">
        <div className='flex flex-auto flex-shrink-0'>
          <button className="btn btn-ghost px-6 btn-lg">
            <Logo />
          </button>
        </div>
      <ul className='menu menu-horizontal px-6 text-secondary'>
        <li><a href='#'>About us</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>How we work</a></li>
        <li><a href='#'>Testimonials</a></li>
        <li><a href='#'>Contacts</a></li>
      </ul>
    </div>
  )
}