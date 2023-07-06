export const Footer = () => {
  return (
    <footer id='footer' className='footer px-[7.5rem] pb-24 pt-16 gap-x-12'>
      <div id="address" className='border-t border-neutral-600 pt-12 w-[13rem]'>
        <div className='footer-title text-white opacity-100 mb-6'>
          Office
        </div>
        <div className='font-light flex flex-col gap-y-2.5 capitalize'>
          <p className="text-[#888] hover:text-white transition-colors">Zaporizhzhia</p>
          <p className="text-[#888] hover:text-white transition-colors">Volgogradskaya, 26A</p>
        </div>
      </div>
      <div id="mail-us" className='border-t border-neutral-600 pt-12 w-[13rem]'>
        <div className='footer-title text-white opacity-100 mb-6'>
        MAIL US
        </div>
        <div className='font-light flex flex-col gap-y-2.5 capitalize'>
          <p className="text-[#888] hover:text-white transition-colors">info@faceit.com.ua</p>
        </div>
      </div>
      <div id="follow-us" className='border-t border-neutral-600 pt-12 w-[13rem]'>
        <div className='footer-title text-white opacity-100 mb-6'>
        FOLLOW US
        </div>
        <div className='font-light flex flex-col gap-y-2.5 capitalize'>
          <a className="text-[#888] hover:text-white transition-colors" href="#social-media">Instagram</a>
          <a className="text-[#888] hover:text-white transition-colors" href="#social-media">Linked In</a>
        </div>
      </div>
      <div id="legal" className='border-t border-neutral-600 pt-12 w-[13rem]'>
        <div className='footer-title text-white opacity-100 mb-6'>
        lEGAL
        </div>
        <div className='font-light flex flex-col gap-y-2.5 capitalize'>
          <a className="text-[#888] hover:text-white transition-colors" href="#legal">Privacy</a>
          <a className="text-[#888] hover:text-white transition-colors" href="#legal">Terms</a>
        </div>
      </div>
    </footer>
  )
}