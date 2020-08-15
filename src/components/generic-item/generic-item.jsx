import React from 'react';
import S from './generic-item.module.scss';


export default function GenericItem({ item, getItem, idx, onClick }){

    const Item = getItem(item);

    return (
        <div className={S.container}>
            <Item item={item} idx={idx} onClick={onClick}/>
        </div>
    )
}