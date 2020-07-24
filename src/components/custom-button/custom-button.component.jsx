import React from 'react';
import './custom-button.styles.css';

export const CustomButton = ({label, ...otherProps}) => {
    return (
        <div id={label} className="game-info" {...otherProps}>
            <div className={ label === 'Hit' ? 'btn-hit' : 'btn-stick'}>{label}</div>
        </div>
    )
}

export default CustomButton;
