import { ContactForm } from "@/components/ContactForm"

export const ContactUs = () => {
  return (
    <>
      <div className='flex flex-col gap-y-9 pt-16 sm:py-32' id='contacts'>
        <div className='text-[2.1875rem] sm:text-[3.125rem] leading-tight text-primary-content capitalize max-w-md'>
          Let’s chat about your project
        </div>
        <ContactForm />
      </div>
    </>
  )
}