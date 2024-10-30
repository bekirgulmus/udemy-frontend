import { useFetchUsersQuery, useAddUserMutation } from "../store/index.jsx";
import { Skeleton } from "@mui/material";
import { UsersListItem } from "./UsersListItem.jsx";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

export const UsersList = () => {
  const { data, isError, isFetching} = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  }

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{width: '100%', height:'600px'}}/>
    )
  } else if(isError) {
    content = <div>Hata Var</div>
  } else {
    content = data.map((user) => (
      <UsersListItem key={user.id} user={user}/>
    ))
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{fontSize: '20px'}}>Kişiler</h1>
        <Button variant='outlined' onClick={handleUserAdd}>
          { results.isLoading ? (
            <CircularProgress size={20} />
          ): <span>Kişi Ekle+</span>}
        </Button>
      </div>
      {content}
    </div>
  )
}
