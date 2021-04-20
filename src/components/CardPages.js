import React from 'react';

import CardInfo from './CardInfoPages';
function CardPages(props) {

    return(
        <div className="d-inline-block g-cardPages" onClick={(e) => props.click(props.item)}>
            <img className="g-card-imagePages" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default CardPages;