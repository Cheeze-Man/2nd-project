import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import './PositionsDetail.scss';

export default function PositionsDetail(props) {
  const [companyInfo, setCompanyInfo] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`API/${id}`)
      .then(response => response.json())
      .then(data => {
        setCompanyInfo(data);
      });
  }, []);

  return (
    <div className="positionsDetail">
      <Nav />
      <div className="positionsContainer">
        <div className="positionDetailBox">
          <div className="titleBox">
            <h1 className="titleStyle">{companyInfo.title}</h1>
          </div>
          <div className="companyInfoBox">
            <div className="companyInfo">
              <h2 className="companyInfoTitle">{companyInfo.role}</h2>
              <p className="companyInfoDetail">내용내용내용</p>
            </div>
          </div>
          <div className="companyWantedBox">
            <div className="companyWanted">
              <p>{companyInfo.carrer}</p>
              <p>{companyInfo.education}</p>
              <p>{companyInfo.deadLine}</p>
              <p>{companyInfo.workArea}</p>
            </div>
            <div className="companyWantedInfo">
              <p>경력내용</p>
              <p>학력내용</p>
              <p>마감일내용</p>
              <p>근무지역내용</p>
            </div>
          </div>
          <div className="companyIntroBox">
            <h2 className="companyIntro">기업/서비스 소개</h2>
            <img src={companyInfo.companyImage} alt="이미지불러오기 실패" />;
            <div className="companyIntroDetail">
              회사소개소개소개소개소개소개
            </div>
            <button className="companyIntroBtn">기업/서비스 소개 더보기</button>
          </div>
        </div>

        <div className="positionFixed">
          <div className="positionFixedInfo">
            <div className="positionFixedHeader">
              <p>이 포지션 면접 질문이 궁금하다면?</p>
              <Link to="">AI 면접 코치</Link>
            </div>
            <div className="positionFixedBody">
              <img
                src="https://cdn.jumpit.co.kr/sm/images/hmlee_4/20212709142748010_622_598.webp"
                alt="기업로고"
              />
              <div className="positionFixedBodyInfo">
                <p>[부산] React 개발자(3년 이상)</p>
                <span>티엔에이치</span>
              </div>
              <button className="positionFixedBtn">취업축하금 70만원</button>
              <button className="positionFixedResumeBtn">지원하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
