import './styles.css'

export const PrimaryButton = ({ title, className, ...props }) => {
  return (
    <button
      {...props}
      className={`btn btn-gradient text-base font-medium leading-5 max-w-max px-[1.38rem] py-[0.68rem] ${className || ''}`}
    >
      {title}
    </button>
  )
}

