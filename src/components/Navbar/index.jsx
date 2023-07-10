import Image from 'next/image'
import logo from 'public/Face_IT_whiteAsset.svg'

export const Navbar = () => {
  return (
    <div className="navbar sticky top-0 px-24 bg-base-100 bg-opacity-80">
        <div className='flex flex-auto flex-shrink-0'>
          <button className="btn btn-ghost px-6 btn-lg">
            <Image src={logo} alt='FaceIT' width={'8.125rem'} height={'auto'}/>
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