import Image from 'next/image'
import logo from 'public/Face_IT_whiteAsset.svg'

export const Navbar = () => {
  return (
    <nav className="navbar px-[7.5rem]">
        <div className='flex flex-auto'>
          <button className="btn btn-ghost rounded-none p-0 btn-lg">
            <Image src={logo} alt='FaceIT' width={'8.125rem'} height={'auto'}/>
          </button>
        </div>
      <ul className='flex flex-row grow justify-between text-[#888]'>
        <li>About us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>How we work</li>
        <li>Testimonials</li>
        <li>Contacts</li>
      </ul>
    </nav>
  )
}