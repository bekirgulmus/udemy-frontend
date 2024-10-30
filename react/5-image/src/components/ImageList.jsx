import ImageItem from "./ImageItem.jsx";

function ImageList({imagesPlaceholder}) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image,index) => (
        <ImageItem key={index} image={image} />
      ))}
    </div>
  )
}

export default ImageList;
