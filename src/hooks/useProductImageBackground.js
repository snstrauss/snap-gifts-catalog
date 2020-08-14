import { useState, useEffect } from "react";

export default function useProductImageBackground(url){
    const [imageDataUrl, setImageDataUrl] = useState('');

    useEffect(() => {
        fetch(url)
        .then(res => res.blob())
        .then((image) => {
            const imageData = URL.createObjectURL(image);
            setImageDataUrl(`url("${imageData}")`);
        });
    }, [url]);

    return imageDataUrl;
}