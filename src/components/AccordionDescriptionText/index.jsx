export const AccordionDescriptionText = ({ children, className = ''}) => {
  return (
    <div
      className={`text-xl leading-6 font-light capitalize ${className}`}
    >
      {children}
    </div>
  )
}