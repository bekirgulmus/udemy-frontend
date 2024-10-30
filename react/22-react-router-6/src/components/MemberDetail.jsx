import { useParams } from "react-router-dom";

function MemberDetail() {
  const { memberId} = useParams();

  return (
    <div>Member detail {memberId}</div>
  )
}

export default MemberDetail;
