import React, { useState, useEffect } from 'react';
import S from './product-item.module.scss';
import useIsInViewport from 'use-is-in-viewport';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import useItemMedia from '../../hooks/useItemMedia';
import ProductMedia from '../product-media/product-media';

export default function ProductItem({ item, idx, onClick }){

    const [showItem, setShowItem] = useState(false);
    const [mediaIsReady, setMediaIsReady] = useState(false);

    const { name, vendor } = item;
    const itemMedia = useItemMedia(item);

    const preferredMedia = itemMedia.video.length ? itemMedia.video[0] : itemMedia.image[0];

    const [isInView, targetRef] = useIsInViewport({
        threshold: 5
    });

    useEffect(() => {
        setShowItem(isInView && mediaIsReady);
    }, [isInView, mediaReady]);

    function mediaReady(media, player){
        setMediaIsReady(true);
    }

    const mediaClassName = `${S.media} ${showItem ? '' : S.hidden}`;

    return (
        <div ref={targetRef} className={S.container} onClick={onClick}>
            <div className={S.background}>
                {
                    showItem
                    ?
                    <div className={S.details}>
                        <span className={S.name}>
                            {name}
                        </span>
                        <span className={S.vendor}>
                            {vendor}
                        </span>
                    </div>
                    :
                    <LoadingSpinner delay={idx * 0.25}/>
                }
                <div className={mediaClassName}>
                    <ProductMedia media={preferredMedia} controls={false} volume={false} ready={mediaReady}/>
                </div>
            </div>
        </div>
    );
}