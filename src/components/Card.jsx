import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({
  urlLink,
  companyImage,
  companyName,
  title,
  workArea,
  career,
}) => {
  return (
    <div className="cardContainer">
      <Link to={`/positions/${urlLink}`}>
        <img src={companyImage} alt="회사사진" className="cardImg" />
        <div className="cardInfo">
          <div className="cardWanted">
            <p className="companyName">{companyName}</p>
            <p className="title">{title}</p>
          </div>
          <div className="cardCompany">
            <div className="cardValue">
              <p className="workArea">{workArea}</p>
              <p className="career">{career}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
