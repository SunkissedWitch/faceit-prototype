"use client"

import { useState } from 'react'
import { Hamburger, Close } from '@/components/HamburgerIcons'

export const MobileMenu = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(prevState => !prevState)

  return (
    <div className="md:hidden">
      <div className="drawer drawer-end">
        <input id="mobile-navbar-menu" type="checkbox" className="drawer-toggle peer" checked={open} onChange={toggleOpen} />
        <div className="drawer-content peer-checked-[:nth-of-type(1)_&]:swap-active">
          <label htmlFor="mobile-navbar-menu" tabIndex={0} className="drawer-button btn btn-ghost btn-circle swap swap-rotate z-10">
            <Hamburger className="swap-off fill-current" />
            <Close className="swap-on fill-current" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="mobile-navbar-menu" className="drawer-overlay mt-20"></label>
          <div className='px-4 mt-20 shadow-lg w-screen sm:max-w-xs h-[calc(100%-5rem)] bg-base-100 text-base-content [&_ul>*]:rounded-none flex flex-col justify-between'>
            <ul className="menu join join-vertical px-0 [&_li>*]:rounded-none [&_li>*]:join-item [&_li>*]:border-collapse [&_li>*]:border-b [&_li>*]:border-base-300 [&_li>*]:last:border-b-0 [&_li>a]:py-[1.56rem]">
              {/* Sidebar content here */}
              {children}
            </ul>
            <ul className='menu join join-vertical rounded-none [&_li>*]:rounded-none border-t pt-7 border-base-300 font-light'>
              <li><a className='py-2.5 px-0' href="mailto:info@faceit.com.ua" target='_blank'>info@faceit.com.ua</a></li>
              <li><a className='py-2.5 px-0' href="#" target='_blank'>Instagram</a></li>
              <li><a className='py-2.5 px-0' href="#" target='_blank'>Linked In</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}