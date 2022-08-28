import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGift";

export const useFetchGifs = (category ) => {

  const [images, setimages] = useState([]);
  const [isloading, setIsloading] = useState( true )

  const getImages = async() => {
    const newImages = await getGifs( category );
    setimages(newImages);
    setIsloading(false)
  }
  
  useEffect( ( ) => {
    getImages();
  
  }, [])

   
    return {
            images: images, //se puede minimizar como son mismo nombre solo (images,)
            isloading,
        }
    
    
  
}
