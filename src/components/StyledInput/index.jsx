export const StyledInput = ({ register, name, rules, label, id, error, ...props }) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={id} className="label px-0">
        <span className="label-text text-lg text-primary-content">{label}</span>
      </label>
      <input
        id={id}
        {...props}
        {...register(name, rules)}
        className="input input-ghost peer text-base px-0 focus:outline-none focus:text-primary-content placeholder:dark:text-[#5C5C5C] placeholder:text-secondary w-full rounded-none" />
      <div className='w-full h-px bg-base-300 peer-focus:bg-base-content transition-colors' />
      {error?.message && <small className='text-error mt-1'>{error.message}</small>}
    </div>
  )
}