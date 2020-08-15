import React from 'react';
import S from './empty.module.scss';

export default function Empty(){

    return (
        <div className={S.container}>
            <img src="/images/empty.png" alt="empty"/>
            <h1>Your search<br/>returned no results!</h1>
        </div>
    )
}