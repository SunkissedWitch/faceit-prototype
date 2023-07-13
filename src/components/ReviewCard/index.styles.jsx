export const CardHeaderText = ({
  firstName,
  lastName,
  role
}) => {
  return (
    <div className='flex flex-col w-full gap-y-1'>
      <div className='text-primary-content text-xl font-light capitalize'>
        {firstName} {lastName}
      </div>
      <div className='text-secondary text-lg font-light'>
        {role}
      </div>
    </div>
  )
}

export const CardAvatar = ({ avatar, firstName }) => {
  if (avatar) {
    return (
      <div className="avatar">
        <div className="w-14 h-14 rounded-full">
          <img src={avatar.src} alt={firstName} />
        </div>
      </div>
    )
  }
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14">
        <span className="text-3xl">{firstName[0]}</span>
      </div>
    </div>
  )
}

export const CardText = ({ children, name }) => {
  return (
    <div className='text-primary-content text-lg leading-snug font-normal pb-6'>
      <span className='text-primary uppercase font-medium mr-1 text-base'>{name} said </span>
      {children}
    </div>
  )
}