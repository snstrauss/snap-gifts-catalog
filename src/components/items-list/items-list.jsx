import React from 'react';
import S from './items-list.module.scss';
import GenericItem from '../generic-item/generic-item';
import ProductItem from '../product-item/product-item';
import PromoItem from '../promo-item/promo-item';

const ITEM_TYPES = {
    product: ProductItem,
    promo: PromoItem
};

function getItemComponent(item){
    const type = item.isPromo ? 'promo' : 'product';
    return ITEM_TYPES[type];
}

export default function ItemsList({ items, ident, itemClick }){
    return (
        <div className={S.container}>
            {
                items.map((item, idx) => (
                    <GenericItem onClick={() => itemClick(item)} key={item[ident]} item={item} getItem={getItemComponent} idx={idx} />
                ))
            }
        </div>
    );
}