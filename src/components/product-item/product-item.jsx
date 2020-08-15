import React from 'react';
import S from './product-item.module.scss';
import useProductImageBackground from '../../hooks/useProductImageBackground';
import useIsInViewport from 'use-is-in-viewport';
import LoadingSpinner from '../loading-spinner/loading-spinner';

export default function ProductItem({ item: { name, media, vendor }, idx }){

    const image = media.find((med) => med.type === 'image');

    const [isInView, targetRef] = useIsInViewport();
    const backgroundImage = useProductImageBackground(image.url, isInView, name);

    return (
        <div ref={targetRef} className={S.container} style={{ backgroundImage }}>
            {
                backgroundImage.length
                ?
                <div className={S.details}>
                    <span className={S.name}>
                        <h3>{name}</h3>
                    </span>
                    <span className={S.vendor}>
                        {vendor}
                    </span>
                </div>
                :
                <LoadingSpinner delay={idx * 0.25}/>
            }
        </div>
    );
}