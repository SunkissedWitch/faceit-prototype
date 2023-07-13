import { FormOptions } from "@/components/FormOptions"
import { StyledInput } from "@/components/StyledInput"
import { seekingOptions, budgetOptions } from "./options"
import { ClientButton } from "./ClientButton"

// required: Name, email, message
// options: radio-button
// add "Not sure" options
// validate: Name, email

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-8">
      <FormOptions name='seeking' label={'I am looking for:'} options={seekingOptions} />
      <StyledInput
        id={'contact-name'}
        type='text'
        label={'Whats your name?'}
        placeholder={'Full Name'}
      />
       <StyledInput
        id={'contact-email'}
        type='email'
        label={'Your Email?'}
        placeholder={'Email Address'}
      />
       <StyledInput
        id={'contact-phone'}
        type='text'
        label={'Your Phone'}
        placeholder={'Mobile phone'}
      />
       <StyledInput
        id={'contact-company'}
        type='text'
        label={'Your Company'}
        placeholder={'Company'}
      />
      <FormOptions name='budget' label={'Project Budget'} options={budgetOptions} />
       <StyledInput
        id={'contact-message'}
        type='text'
        label={'Message'}
        placeholder={'Enter Message'}
      />
      <ClientButton />
    </form>
  )
}