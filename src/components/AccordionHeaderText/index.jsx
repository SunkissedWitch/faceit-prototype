export const AccordionHeaderText = ({ children, className, active, ...props }) => {
  return (
    <div
      className={`${active ? 'text-primary pl-5' : 'text-primary-content'} text-[3.125rem] capitalize transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}