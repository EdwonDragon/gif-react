import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        const img = await getGifs(category);
        setImages(img);
        setIsLoading(false)
    };

    useEffect(() => {
        getImages();
    }, []);


    return {
        images,
        isLoading
    }
}
