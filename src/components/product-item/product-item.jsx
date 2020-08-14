import React from 'react';
import S from './product-item.module.scss';
import useProductImageBackground from '../../hooks/useProductImageBackground';

export default function ProductItem({ item: { name, media, vendor } }){

    const image = media.find((med) => med.type === 'image');
    const backgroundImage = useProductImageBackground(image.url);

    return (
        <div className={S.container} style={{ backgroundImage }}>
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