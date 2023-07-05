export const Footer = () => {
  return (
    <footer className='footer px-12 py-10 gap-x-12'>
      <div className='border-t border-neutral-600 pt-12 w-full'>
        <div className='footer-title'>
          Office
        </div>
        <div className='flex flex-col'>
          <p>ZAPORIZHZHIA</p>
          <p>Volgogradskaya, 26A</p>
        </div>
      </div>
      <div className='border-t border-neutral-600 pt-12 w-full'>
        <div className='footer-title'>
        MAIL US
        </div>
        <div className='flex flex-col'>
          <p>info@faceit.com.ua</p>
        </div>
      </div>
      <div className='border-t border-neutral-600 pt-12 w-full'>
        <div className='footer-title'>
        FOLLOW US
        </div>
        <div className='flex flex-col'>
          <p>Instagram</p>
          <p>Linked In</p>
        </div>
      </div>
      <div className='border-t border-neutral-600 pt-12 w-full'>
        <div className='footer-title'>
        lEGAL
        </div>
        <div className='flex flex-col'>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  )
}