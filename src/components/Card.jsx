import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ urlLink, imgSrc, name, title, language, location, career }) => {
  return (
    <div className="cardContainer">
      <Link to={urlLink}>
        <img src={imgSrc} alt="" className="cardImg" />
        <div className="cardInfo">
          <div className="cardWanted">
            <p>{name}</p>
            <p>{title}</p>
          </div>
          <div className="cardCompany">
            <p>{language}</p>
            <div className="cardValue">
              <p>{location}</p>
              <p>{career}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
