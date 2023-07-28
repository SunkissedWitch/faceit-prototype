export const AccordionHeaderText = ({ children, className, active, ...props }) => {
  return (
    <div
      className={`${active ? 'text-primary' : 'text-primary-content'} w-full text-[1.5625rem] md:text-4xl lg:text-[3.125rem] capitalize transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}