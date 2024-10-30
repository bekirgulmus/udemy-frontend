import {
  useAddPhotoMutation,
  useFetchPhotosQuery
} from "../store/index.jsx";
import {CircularProgress, Skeleton} from "@mui/material";
import { PhotoListItem } from "./PhotoListItem.jsx";
import Button from "@mui/material/Button";

export const PhotoList = ({album}) => {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  }

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{width: '100%', height:'200px'}}/>
    )
  } else if(isError) {
    content = <div>Hata Var</div>
  } else {
    content = data.map((photo,index) => (
      <PhotoListItem key={index} photo={photo}/>
    ))
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{album.title} Fotoları</h3>
          <Button variant="outlined" onClick={handlePhotoAdd}>
            {results.isLoading ? <CircularProgress/> : <span> Fotoğraf Ekle+</span>}
          </Button>
        </div>
      </div>
      <div className="fotoDiv">{content}</div>
    </>
  )
}
