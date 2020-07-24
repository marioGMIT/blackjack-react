import React from 'react';
import './card.styles.css';

export const Card = ({label}) => {
    
    return (
        <div className="card visible" >                        
            <div className="card-front card-face">
                {/*  eslint-disable-next-line */}
                <div className="card-value">{label == '1' ? 'A' : label}</div>
            </div>
        </div> 
    )
}

export default Card;
