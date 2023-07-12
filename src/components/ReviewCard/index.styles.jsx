export const CardHeaderText = ({
  firstName,
  lastName,
  role
}) => {
  return (
    <div className='flex flex-col w-full gap-y-1'>
      <div className='text-xl font-light'>
        {firstName} {lastName}
      </div>
      <div className='text-lg font-light'>
        {role}
      </div>
    </div>
  )
}