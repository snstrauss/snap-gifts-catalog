import React, { useRef, useEffect } from 'react';
import S from './product-media.module.scss';
import useIsInViewport from 'use-is-in-viewport';
import useProductMedia from '../../hooks/useProductMedia';

export default function ProductMedia( { media: { type, url, id }, controls, volume, ready }){

    const mediaParent = useRef();
    const [isInView, targetRef] = useIsInViewport({
        threshold: 100
    });

    const mediaDataUrl = useProductMedia(url, isInView);

    useEffect(() => {
        if(mediaDataUrl.length && ready){
            ready();
        }
    }, [mediaDataUrl.length])

    useEffect(() => {
        if(type === 'video'){
            const player = mediaParent.current.children[0];
            player.volume = volume === false ? 0 : 1;
            if(isInView){
                player.play();
            } else {
                player.pause();
            }
        }
    }, [isInView]);

    return (
        <div ref={mediaParent} className={S.container}>
            {
                type === 'video'
                ?
                <video src={mediaDataUrl.length ? mediaDataUrl : null} controls={controls} ref={targetRef} />
                :
                    type === 'image'
                    ?
                    <img src={mediaDataUrl} alt={id} ref={targetRef} />
                    :
                    null
            }
        </div>
    );
}