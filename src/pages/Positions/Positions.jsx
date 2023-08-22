import React from 'react';
import './Positions.scss';
import Nav from '../../components/Nav.jsx';
import Card from '../../components/Card.jsx';
import PositionBtn from '../Positions/PositionBtn.jsx';

export default function Positions() {
  const positionJobBtn = {
    jobGroup: [
      '전체',
      '서버/백엔드 개발자',
      '프론트엔드 개발자',
      '웹 풀스택 개발자',
      '안드로이드 개발자',
      'IOS 개발자',
      '클스플랫폼 웹개발자',
      '게임 클라이언트 개발자',
      '게임 서버 개발자',
    ],
  };

  const cardList = {
    card: ['1', '2', '3', '4', '5', '6', '7'],
  };

  return (
    <div className="positions">
      <div className="positionContainer">
        <Nav />
        <div className="positionSearch">직무 탐색</div>
        <div className="positionList">
          {/* 추후 advanced router세션 이후 기능 구현할 것 */}
          {positionJobBtn.jobGroup.map((group, index) => (
            <PositionBtn key={index} jobGroup={group} />
          ))}
        </div>
      </div>
      <div className="caedListDiv">
        <div></div>
        <div className="cardListStyle">
          <div className="cardList">
            {cardList.card.map((list, index) => (
              <Card key={index} list={list} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
