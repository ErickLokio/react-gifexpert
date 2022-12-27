export const getGifs = async (category) => {
    const endPointGif =
      "https://api.giphy.com/v1/gifs/trending?api_key=PkHxVT5a9fhMqGcybg6qiN21tI5ZL0Jq&q=" +
      category +
      "&limit=20";
    const resp = await fetch(endPointGif);
    const { data } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  
    return gifs;
  };