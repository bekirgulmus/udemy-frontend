import { instructorProps } from "./propstypes.ts";

export const Instructor = (props:instructorProps) => {
  return (
    <div>
      {props.instructorNameLastName.firstName} {' '}
      {props.instructorNameLastName.lastName}
    </div>
  )
}
