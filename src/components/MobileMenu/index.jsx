// "use client"

// import { useState } from 'react'
import { Hamburger, Close } from '@/components/HamburgerIcons'

// const MobileMenuBtn = (props) => {
//   return (
//     <label tabIndex={0} className="btn btn-ghost btn-circle swap swap-rotate">
//       <input type="checkbox" {...props} />
//       <Hamburger className="swap-off fill-current" />
//       <Close className="swap-on fill-current" />
//     </label>
//   )
// }

export const MobileMenu = ({ children }) => {
  // const [open, setOpen] = useState(false)
  // const toggleOpen = () => setOpen(prevState => !prevState)

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className="btn btn-ghost btn-circle swap swap-rotate">
        <input type="checkbox" className='' />
        <Hamburger className="swap-off fill-current" />
        <Close className="swap-on fill-current" />
      </label>
      <div className='menu-dropdown'>
        <ul tabIndex={0} className={`menu dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-screen h-screen`}>
          {children}
        </ul>
      </div>
    </div>
  )
}