type instructorListType = {
  instructorNameLastNameList : {
    firstName : string,
    lastName : string,
  }[]
};

export const InstructorList = (props: instructorListType) => {
  return (
    <div>{props.instructorNameLastNameList.map(item => (
      <h3 key={item.firstName}>{item.firstName} {item.lastName}</h3>
    ))}</div>
  )
}
