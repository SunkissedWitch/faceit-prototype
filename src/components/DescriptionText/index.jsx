export const DescriptionText = ({ children, className = ''}) => {
  return (
    <div
      className={`text-lg text-primary-content capitalize ${className}`}
    >
      {children}
    </div>
  )
}