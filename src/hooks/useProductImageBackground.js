import { useState, useEffect } from "react";

const IMAGE_CACHE = {};

function cssUrl(imageData){
    return `url("${imageData}")`;
}

export default function useProductImageBackground(url, shouldGetImage, name){

    const [imageDataUrl, setImageDataUrl] = useState(IMAGE_CACHE[url] || '');

    useEffect(() => {
        if(shouldGetImage && !imageDataUrl.length){
            fetch(url)
            .then(res => res.blob())
            .then((image) => {
                const imageData = URL.createObjectURL(image);

                IMAGE_CACHE[url] = cssUrl(imageData);
                setImageDataUrl(IMAGE_CACHE[url]);
            });
        }
    }, [url, shouldGetImage, imageDataUrl.length]);

    return imageDataUrl;
}