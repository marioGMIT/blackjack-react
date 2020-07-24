/* eslint-disable react/prop-types */
import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';
export const CardList = ({ items, label, name }) => {
  return (
    <div>
      <div className="title-cards">{name}</div>
      <div id="player-cards" className="group-cards-player">
        {items ? (
          items.map((item) => (
            <Card key={Math.floor(Math.random() * 10000)} label={item} />
          ))
        ) : (
          <Card key={Math.floor(Math.random() * 10000)} label={label} />
        )}
        {}
      </div>
    </div>
  );
};

export default CardList;
