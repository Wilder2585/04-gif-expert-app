import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGift";

export const useFetchGifs = (category ) => {

  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState( true )

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false)
  }
  
  useEffect( ( ) => {
    getImages();
  
  }, [])

   
    return {
            images: images, //se puede minimizar como son mismo nombre solo (images,)
            isloading,
        }
    
    
  
}
