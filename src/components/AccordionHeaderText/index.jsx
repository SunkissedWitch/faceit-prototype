export const AccordionHeaderText = ({ children, className, active, ...props }) => {
  return (
    <div
      className={`${active ? 'text-primary' : 'text-primary-content'} text-[2rem] md:text-[3.125rem] capitalize transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}