import React from 'react';
import S from './product-item.module.scss';
import useProductImageBackground from '../../hooks/useProductImageBackground';
import useIsInViewport from 'use-is-in-viewport';

export default function ProductItem({ item: { name, media, vendor } }){

    const image = media.find((med) => med.type === 'image');

    const [isInView, targetRef] = useIsInViewport();
    const backgroundImage = useProductImageBackground(image.url, isInView, name);

    return (
        <div ref={targetRef} className={S.container} style={{ backgroundImage }}>
            <div className={S.name}>
                <h3>{name}</h3>
            </div>
            {
                !backgroundImage.length &&
                <span>'waittt'</span>
            }
            <div className={S.vendor}>
                {vendor}
            </div>
        </div>
    );
}