import React from 'react';
import S from './select.module.scss';

export default function Select({ options, change }){
    return (
        <div className={S.container}>
            <select name="options" onChange={change}>
                {
                    options.map((child, idx) => (
                        <option key={`option-${idx}`} value={child}>
                            {child}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}