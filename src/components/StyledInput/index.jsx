export const StyledInput = ({ label, id, ...props }) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={id} className="label px-0">
        <span className="label-text text-lg text-primary-content">{label}</span>
      </label>
      <input
        {...props}
        // ref={ref}
        id={id}
        className="input input-ghost peer text-base px-0 focus:outline-none focus:text-primary-content placeholder:dark:text-[#5C5C5C] placeholder:text-secondary w-full" />
      <div className='w-full h-px bg-base-300 peer-focus:bg-base-content transition-colors' />
    </div>
  )
}