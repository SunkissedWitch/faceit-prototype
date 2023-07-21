"use client"

import { useForm } from "react-hook-form"
import { FormOptions } from "@/components/FormOptions"
import { StyledInput } from "@/components/StyledInput"
import { PrimaryButton } from "@/components/PrimaryButton"
import { seekingOptions, budgetOptions } from "./options"
import { emailRule, fullNameRule, messageRule } from "./rules"
import { axios } from "@/utils/axiosInstance"
import { useState } from "react"

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
  const [response, setResponse] = useState({
    text: '',
    visible: false
  })

  // const onSubmit = (data) => {
  //   // ToDo: add request with collected data
  //   console.log('data', data)
  // }

  const onSubmit = async (data) => {
    try {
      // ToDo: add next behavior
      const response = await axios.post("/api", { data });
      setResponse({
        text: "We will contact you as soon as possible. Thank you for your interest.",
        visible: true
      })
      console.log('response', response)
    } catch (error) {
      console.log('error', error)
      setResponse({
        text: "Our developer seems to be unable to write the request properly, so we did not receive your letter. Do you really want to contact us?",
        visible: true
      });
    }
  };

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
      {response.visible &&
        <div className='px-4 text-secondary text-base text-center'>
          {response.text}
        </div>
      }
    </form>
  )
}