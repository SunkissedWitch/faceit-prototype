export const HeaderText = ({ children, className = ''}) => {
  return (
    <div
      className={`text-primary font-bold text-xl uppercase ${className}`}
    >
      {children}
    </div>
  )
}