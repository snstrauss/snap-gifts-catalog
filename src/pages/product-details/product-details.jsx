import React, { useRef, useState } from 'react';
import S from './product-details.module.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { ROUTES } from '../../App';
import useItemMedia from '../../hooks/useItemMedia';
import ProductMedia from '../../components/product-media/product-media';
import { isElementInViewport } from '../../services/utils';

export default function ProductDetails(){

    const mediaContainer = useRef();

    const history = useHistory();
    const { item } = useLocation().state || {};

    const [arrowToRight, setArrowToRight] = useState(true);

    if(!item){
        goHome();
    }

    const media = useItemMedia(item);

    function goHome(){
        history.push(ROUTES.LIST);
    }

    function nextMedia(){

        console.log(mediaContainer);
        const next = Array.from(mediaContainer.current.children).filter((media) => {
            const player = media.children[0];
            const isIn = player && isElementInViewport(player);
            return (player && player.tagName === 'VIDEO') && !isIn;
        })[0];

        next.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
        setArrowToRight((prevArrow) => !prevArrow);
    }

    const arrowStyle = {
        "--point-right": arrowToRight ? 1 : 0
    };

    return (
        <div className={S.container}>
            {
                item &&
                <>
                    <header>
                        <img onClick={goHome} src="/images/arrow-left.png" alt="back"/>
                        <h1>{item.name}</h1>
                        <h3>{item.vendor}</h3>
                    </header>
                    <main>
                        {
                            ['video', 'image'].map(type => (
                                <section key={type} className={S[`${type}s`]} ref={(media[type].length > 1) ? mediaContainer : null}>
                                    {
                                        media[type].map((item, idx) => (
                                            <ProductMedia media={item} idx={idx} key={`${type}-${idx}`}/>
                                        ))
                                    }
                                    {
                                        (media[type].length > 1) &&
                                        <img onClick={nextMedia} className={S.next} style={arrowStyle} src="/images/arrow-left.png"/>
                                    }
                                </section>
                            ))
                        }
                    </main>
                </>
            }
        </div>
    )
}