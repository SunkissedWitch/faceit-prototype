import './styles.css'

export const FormOptions = ({ register, name, label, options, ...props }) => {
  return (
    <div className="form-control w-full">
      <fieldset>
        <legend className="label px-0 text-lg text-primary-content mb-4">
          {label}
        </legend>
        <div className='flex flex-row w-full flex-wrap gap-x-6 gap-y-3'>
          { options?.map((option) => (
            <input
              key={`radio-${option.id}-${name}`}
              name={name}
              {...props}
              {...register(name)}
              type="radio"
              aria-label={option.value}
              className="btn capitalize font-normal text-lg h-10 px-[1.81rem] rounded-[0.625rem]"
              value={option.value} />
          ))}
        </div>
      </fieldset>
    </div>
  )
}
