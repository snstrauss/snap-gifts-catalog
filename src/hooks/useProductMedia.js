import { useState, useEffect } from "react";

const CACHE = {};

export default function useProductMedia(url, shouldGet){

    const [dataUrl, setDataUrl] = useState(CACHE[url] || '');

    useEffect(() => {
        if(shouldGet && !dataUrl.length){
            fetch(url)
            .then(res => res.blob())
            .then((image) => {
                const mediaData = URL.createObjectURL(image);
                CACHE[url] = mediaData;
                setDataUrl(CACHE[url]);
            });
        }
    }, [url, shouldGet, dataUrl.length]);

    return dataUrl;
}