import {
  useAddAlbumMutation,
  useFetchAlbumsQuery
} from "../store/index.jsx";
import Button from "@mui/material/Button";
import {CircularProgress, Skeleton} from "@mui/material";
import { AlbumListItem } from "./AlbumListItem.jsx";

export const AlbumList = ({user}) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  }

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{width: '100%', height:'200px'}}/>
    )
  } else if(isError) {
    content = <div>Hata Var</div>
  } else {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album}/>
    ))
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{user.name} Albumü</h3>
          <Button variant="outlined" onClick={handleAlbumAdd}>
            {results.isLoading ? <CircularProgress/> : <span> Album Ekle+</span>}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  )
}
