import React from 'react';
import S from './promo-item.module.scss';
import { randomFromList } from '../../services/utils.service';

const BG = ["#541388", "#D90368", "#6A7FDB", "#E94F37"];
const TXT = ["#FFD400", "#12EAEA", "#D7FFAB", "#06D6A0"];

export default function PromoItem({ item }){

    const customStyle = {
        backgroundColor: randomFromList(BG),
        color: randomFromList(TXT)
    };

    return (
        <div className={S.container} style={customStyle}>
            <span>{item.text}</span>
        </div>
    )
}