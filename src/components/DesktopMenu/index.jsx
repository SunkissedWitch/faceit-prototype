"use client"

export const DesktopMenu = ({ children }) => {
  return (
    <ul className='hidden md:flex menu menu-horizontal px-2 md:px-6 text-secondary'>
      {children}
    </ul>
  )
}