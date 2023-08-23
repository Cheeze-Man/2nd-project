import React, { useState } from 'react';
import './Main.scss';
import Nav from '../../components/Nav.jsx';
import Card from '../../components/Card.jsx';

export default function Main() {
  const [cardData, setCardData] = useState({
    urlLink: '',
    imgSrc: '',
    name: '',
    title: '',
    language: '',
    location: '',
    career: '',
  });

  fetch('', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      setCardData(data);
    })
    .catch(error => {
      alert('데이터를 가져올 수 없습니다. : ', error);
    });

  return (
    <div>
      <Nav />
      Main Page
      <Card
        urlLink={cardData.urlLink}
        imgSrc={cardData.imgSrc}
        name={cardData.name}
        title={cardData.title}
        language={cardData.language}
        location={cardData.location}
        career={cardData.career}
      />
    </div>
  );
}
