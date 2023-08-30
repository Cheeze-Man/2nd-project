import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PositionsDetail.scss';

export default function PositionsDetail() {
  const [companyInfo, setCompanyInfo] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.68:3000/positions/${id}`)
      .then(response => response.json())
      .then(data => {
        setCompanyInfo(data.data[0]);
      });
  }, [params]);

  console.log(companyInfo);

  return (
    <div className="positionsDetail">
      <div className="positionsContainer">
        <div className="positionDetailBox">
          <div className="titleBox">
            <h1 className="titleStyle">{companyInfo.title}</h1>
            <p>{companyInfo.companyName}</p>
          </div>
          <div className="companyInfoBox">
            <div className="companyInfo">
              <h2 className="companyInfoTitle">주요업무</h2>
              <p className="companyInfoDetail">{companyInfo.role}</p>
            </div>
          </div>
          <div className="companyWantedBox">
            <div className="companyWanted">
              <p>경력</p>
              <p>학력</p>
              <p>마감일</p>
              <p>근무지역</p>
            </div>
            <div className="companyWantedInfo">
              <p>{companyInfo.career}</p>
              <p>{companyInfo.education}</p>
              <p>{companyInfo.deadline}</p>
              <p>{companyInfo.workArea}</p>
            </div>
          </div>
          <div className="companyIntroBox">
            <h2 className="companyIntro">기업/서비스 소개</h2>
            <img src={companyInfo.companyImage} alt="회사 소개" />;
            {/* <div className="companyIntroDetail">
              회사소개소개소개소개소개소개
            </div> */}
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
