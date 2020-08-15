import React from 'react';
import S from './header.module.scss';
import Select from '../select/select';
import { CONST as productConst } from '../../services/products.service';

const SEARCH_TIMEOUT = 750;

let searchTimeoutRef;
export default function Header({ vendors, searchChange, vendorChange }){

    function throttledSearch(ev){
        const val = ev.target.value;
        clearTimeout(searchTimeoutRef);
        searchTimeoutRef = setTimeout(() => {
            searchChange(val);
        }, SEARCH_TIMEOUT)
    }

    function selectionChange({ target: { value } }){
        const newVal = value === productConst.NO_SELECTION_VENDOR ? undefined : value;
        vendorChange(newVal);
    }

    return (
        <header className={S.container}>
            <div className={S.inner}>
                <input type="text" onChange={throttledSearch} placeholder="Search for product"/>
                {
                    vendors &&
                    <div className={S.select}>
                        <Select options={vendors} change={selectionChange} />
                    </div>
                }
            </div>
        </header>
    )
}