import { useState } from "react";
import './App.css'
import SearchHeader from "./SearchHeader.jsx";
import searchImages from "./api.js";
import ImageList from "./components/ImageList.jsx";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  )
}

export default App
