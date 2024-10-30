import { CircularProgress } from "@mui/material";
import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store/index.jsx";

export const PhotoListItem = ({photo}) => {
  const [removePhoto,results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(album);
  }

  return (
    <div style={{margin: '20px', cursor: 'pointer', position: 'relative'}} onClick={handleRemovePhoto}>
      <img src={photo.url} alt={photo.id} width={150} height={150}/>
      <div className="deleteCircularDiv">
        {results.isLoading ? (<CircularProgress/>) : (<GoTrash style={{width: '20px', height: '20px'}}/>)}
      </div>
    </div>
  )
}
