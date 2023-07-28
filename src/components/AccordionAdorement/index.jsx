export const AccordionAdorement = ({ checked, children }) => {
  const currentColor = checked ? 'text-secondary' : 'text-secondary-focus'
  return (
    <div className={`${currentColor} text-lg flex-shrink-0 sm:text-xl w-max sm:w-1/6 md:w-1/5 lg:w-1/4 pr-6 sm:pr-8 transition-colors duration-[600ms]`}>
      {children.toString()?.length < 2 && '0'}{children}
    </div>
  )
}
