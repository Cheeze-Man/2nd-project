import React from 'react';
import './Main.scss';
import Nav from '../../components/Nav.jsx';
import Card from '../../components/Card.jsx';

export default function Main() {
  const cardData = {
    urlLink: '링크',
    imgSrc: '이미지',
    name: '회사이름',
    title: '공고제목',
    language: ['사용언어1' + 'ㆍ' + '사용언어2'],
    location: '회사위치',
    career: '경력',
  };
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
        location={cardData.location + 'ㆍ'}
        career={cardData.career}
      />
    </div>
  );
}
