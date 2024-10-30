import axios from "axios";

const searchImages = async (term) => {
  if (!term.length > 0) {
    return [];
  }
  const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
      Authorization: `Client-ID g_5k_ndZEPb2vMXGTeTAqvaxs02MwgX14YM8hd3QGd8`
    },
    params: {
      query: term
    }
  });

  return response.data.results;
}

export default searchImages;
