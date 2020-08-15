import React, { useRef, useEffect } from 'react';
import S from './product-media.module.scss';
import useIsInViewport from 'use-is-in-viewport';

export default function ProductMedia( { media: { type, url, id }, idx }){

    const mediaParent = useRef();
    const [isInView, targetRef] = useIsInViewport({
        threshold: 100
    });
    useEffect(() => {
        if(type === 'video'){
            const player = mediaParent.current.children[0];
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
                <video src={url} controls ref={targetRef}/>
                :
                    type === 'image'
                    ?
                    <img src={url} alt={id} ref={targetRef}/>
                    :
                    null
            }
        </div>
    );
}