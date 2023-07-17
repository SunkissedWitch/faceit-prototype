"use client"

import { useForm } from "react-hook-form"
import { FormOptions } from "@/components/FormOptions"
import { StyledInput } from "@/components/StyledInput"
import { PrimaryButton } from "@/components/PrimaryButton"
import { seekingOptions, budgetOptions } from "./options"
import { emailRule, fullNameRule, messageRule } from "./rules"

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      seeking: 'Not Sure',
      full_name: '',
      email: '',
      phone: '',
      company: '',
      budget: 'Not Sure',
      message: ''
    },
    reValidateMode: 'onChange'
  })

  const onSubmit = (data) => {
    // ToDo: add request with collected data
    console.log('data', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-8"
    >
      <FormOptions register={register} name={'seeking'} label={'I am looking for:'} options={seekingOptions} />
      <StyledInput
        id={'contact-name'}
        type='text'
        label={'Whats your name?'}
        placeholder={'Full Name'}
        name={'full_name'}
        register={register}
        rules={fullNameRule}
        error={errors?.full_name}
      />
      <StyledInput
        id={'contact-email'}
        type='email'
        label={'Your Email?'}
        placeholder={'Email Address'}
        name={'email'}
        register={register}
        rules={emailRule}
        error={errors?.email}
      />
      <StyledInput
        id={'contact-phone'}
        type='text'
        label={'Your Phone'}
        placeholder={'Mobile phone'}
        name={'phone'}
        register={register}
      />
      <StyledInput
        id={'contact-company'}
        type='text'
        label={'Your Company'}
        placeholder={'Company'}
        name={'company'}
        register={register}
      />
      <FormOptions register={register} name={'budget'} label={'Project Budget'} options={budgetOptions} />
      <StyledInput
        id={'contact-message'}
        type='text'
        label={'Message'}
        placeholder={'Enter Message'}
        name={'message'}
        register={register}
        rules={messageRule}
        error={errors?.message}
      />
      <PrimaryButton type='submit' className="px-0" title={'Submit'} />
    </form>
  )
}