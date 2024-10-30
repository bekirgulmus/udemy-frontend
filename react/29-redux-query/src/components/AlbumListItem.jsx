import { CircularProgress } from "@mui/material";
import { GoTrash } from "react-icons/go";
import { ExpandablePanel } from "./ExpandablePanel.jsx";
import { PhotoList } from "./PhotoList.jsx";
import { useRemoveAlbumMutation } from "../store/index.jsx";

export const AlbumListItem = ({album}) => {
  const [removeAlbum,results] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  }

  const header = (
    <>
      <button style={{ marginRight: '30px', border: 'none'}} onClick={handleClick}>
        { results. isLoading ? (<CircularProgress/>) : (<GoTrash style={{ width: '20px', height: '20px'}}/>)}
      </button>
      {album.title}
    </>
  )

  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  )
}
