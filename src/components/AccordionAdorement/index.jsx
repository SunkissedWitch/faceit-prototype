export const AccordionAdorement = ({ checked, children }) => {
  const currentColor = checked ? 'text-secondary' : 'text-secondary-focus'
  return (
    <div className={`${currentColor} text-xl w-1/4 transition-colors duration-[600ms]`}>
      {children.toString()?.length < 2 && '0'}{children}
    </div>
  )
}
