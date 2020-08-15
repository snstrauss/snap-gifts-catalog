import React from 'react';
import S from './loading-spinner.module.scss';

export default function LoadingSpinner({delay}){

    const customStyle = {
        "--delay": `${delay}s`
    };

    return (
        <div className={S.frame} style={customStyle}>
            <div className={S.center}>
                <div className={S.dot1}></div>
                <div className={S.dot2}></div>
                <div className={S.dot3}></div>
            </div>
        </div>
    )
}