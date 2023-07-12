import { CardHeaderText } from "./index.styles"

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
      <div className='w-full min-h-16 py-2 px-0'>
        <div className='flex flex-row w-5/6 gap-x-4'>
          { avatar
            ?
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            :
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                <span className="text-3xl">K</span>
              </div>
            </div>
          }
          <CardHeaderText
            firstName={firstName}
            lastName={lastName}
            role={role}
          />
        </div>
        <div>{text}</div>
      </div>
    </>
  )
}