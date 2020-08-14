import React from 'react';
import S from './promo-item.module.scss';

export default function PromoItem({ item }){

    return (
        <div className={S.container}>
            <span>promo: {item.text}</span>
        </div>
    )
}