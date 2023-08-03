import { CardAvatar, CardHeaderText, CardText } from "./index.styles"

export const ReviewCard = ({ review, ...props }) => {
  const { firstName, lastName, role, text, avatar } = review || {
    firstName: 'Name',
    lastName: 'Surname',
    role: 'Co-founder',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
    avatar: false
  }
  return (
    <>
      <div {...props} className='w-full flex flex-col min-h-16 py-2 px-0 gap-y-6 sm:gap-y-8'>
        <div className='flex flex-row w-5/6 gap-x-4'>
          <CardAvatar avatar={avatar} firstName={firstName} />
          <CardHeaderText
            firstName={firstName}
            lastName={lastName}
            role={role}
          />
        </div>
        <CardText name={firstName}>{text}</CardText>
      </div>
    </>
  )
}