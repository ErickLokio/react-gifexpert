import { useEffect, useState } from "react";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
  
    useEffect(
        () => {
          getImages();
        },
        []
    )

    return {
        images: images,
        isLoading: isLoading
    }
}

const getGifs = async (category) => {
  console.log(category);
  const endPointGif = `https://api.giphy.com/v1/gifs/search?api_key=PkHxVT5a9fhMqGcybg6qiN21tI5ZL0Jq&q=${ category }&limit=25`;
  const resp = await fetch(endPointGif);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};