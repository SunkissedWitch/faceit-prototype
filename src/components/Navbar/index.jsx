import Image from 'next/image'
import logo from 'public/Face_IT_whiteAsset.svg'

export const Navbar = () => {
  return (
    <nav className="navbar px-24">
        <div className='flex flex-auto'>
          <button className="btn btn-ghost px-6 btn-lg">
            <Image src={logo} alt='FaceIT' width={'8.125rem'} height={'auto'}/>
          </button>
        </div>
      <ul className='menu menu-horizontal px-6 text-[#888]'>
        <li><a href='#'>About us</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>How we work</a></li>
        <li><a href='#'>Testimonials</a></li>
        <li><a href='#'>Contacts</a></li>
      </ul>
    </nav>
  )
}