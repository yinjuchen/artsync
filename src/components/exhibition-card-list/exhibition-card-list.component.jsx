
import React from 'react';
import ExhibitionCard from '../exhibition-card/exhibition-card.component';
import './exhibition-card-list.styles.scss'

const ExhibitionCardList = ({ artworkers}) => {
  return (
    <div className="card-list-container">
      {artworkers.map((artworker, id) => (
          <ExhibitionCard key={id} artworker={artworker}/>
      ))}
    </div>
  );
};

export default ExhibitionCardList
