import { ContactForm } from "@/components/ContactForm"

export const ContactUs = () => {
  return (
    <>
      <div className='flex flex-col gap-y-9 mb-32'>
        <div className='text-[3.125rem] leading-tight text-primary-content capitalize max-w-md'>
          Let’s chat about your project
        </div>
        <ContactForm />
      </div>
    </>
  )
}