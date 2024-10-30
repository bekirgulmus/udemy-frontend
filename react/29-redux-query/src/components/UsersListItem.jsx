import { ExpandablePanel } from "./ExpandablePanel.jsx";
import { AlbumList } from "./AlbumList.jsx";
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from "../store/index.jsx";
import { CircularProgress } from "@mui/material";

export const UsersListItem = ({user}) => {
  const [removeUser,results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  }

  const header = (
    <>
      <button style={{ marginRight: '30px', border: 'none'}} onClick={handleClick}>
        { results. isLoading ? (<CircularProgress/>) : (<GoTrash style={{ width: '20px', height: '20px'}}/>)}
      </button>
      {user.name}
    </>
  )

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  )
}
