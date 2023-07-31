export const Footer = () => {
  return (
    <footer id='footer' className='px-5 sm:px-10 md:px-14 lg:px-[7.5rem] pb-24 pt-16'>
      <div className="container mx-auto flex flex-col sm:flex-row gap-x-4 gap-y-12 justify-between flex-wrap">
      <div id="address" className='flex flex-shrink-0 flex-col'>
        <div className='h-px flex flex-initial w-full sm:w-[13rem] bg-[#3c3c3c] mb-[1.87rem] sm:mb-8' />
        <div className='footer-title text-primary-content opacity-100 mb-6'>
          Office
        </div>
        <div className='font-light flex flex-col gap-y-2.5'>
          <p className="hover:text-secondary-focus transition-colors">Zaporizhzhia</p>
          <p className="hover:text-secondary-focus transition-colors">Volgogradskaya, 26A</p>
        </div>
      </div>
      <div id="mail-us" className='flex flex-shrink-0 flex-col'>
        <div className='h-px flex flex-initial w-full sm:w-[13rem] bg-[#3c3c3c] mb-[1.87rem] sm:mb-8' />
        <div className='footer-title text-primary-content opacity-100 mb-6'>
        MAIL US
        </div>
        <div className='font-light flex flex-col gap-y-2.5'>
          <p className="hover:text-secondary-focus transition-colors">info@faceit.com.ua</p>
        </div>
      </div>
      <div id="follow-us" className='flex flex-shrink-0 flex-col'>
      <div className="sm:ml-auto min-w-[13rem]">
        <div className='h-px flex flex-initial w-full sm:w-[13rem] bg-[#3c3c3c] mb-[1.87rem] sm:mb-8' />
        <div className='footer-title text-primary-content opacity-100 mb-6'>
        FOLLOW US
        </div>
        <div className='font-light flex flex-col gap-y-2.5'>
          <a className="hover:text-secondary-focus transition-colors" href="#social-media">Instagram</a>
          <a className="hover:text-secondary-focus transition-colors" href="#social-media">Linked In</a>
        </div>
        </div>
      </div>
      <div id="legal" className='flex flex-shrink-0 flex-col'>
        <div className="sm:ml-auto min-w-[13rem]">
        <div className='h-px flex flex-initial w-full sm:w-[13rem] bg-[#3c3c3c] mb-[1.87rem] sm:mb-8' />
        <div className='footer-title text-primary-content opacity-100 mb-6'>
        lEGAL
        </div>
        <div className='font-light flex flex-col gap-y-2.5'>
          <a className="hover:text-secondary-focus transition-colors" href="#legal">Privacy</a>
          <a className="hover:text-secondary-focus transition-colors" href="#legal">Terms</a>
        </div>
      </div>
        </div>
      </div>
    </footer>
  )
}