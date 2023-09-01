import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PositionsDetail.scss';
import ApplyModalStyle from './ApplyModalStyle';

export default function PositionsDetail() {
  const [companyInfo, setCompanyInfo] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.187:3000/positions/${id}`)
      .then(response => response.json())
      .then(data => {
        setCompanyInfo(data.data[0]);
      });
  }, [params]);

  const [isOpen, setIsOpen] = useState(false);

  const openApplyModal = () => {
    setIsOpen(true);
  };

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
            <img src={companyInfo.companyImage} alt="회사 소개" />
          </div>
        </div>

        <div className="positionSticky">
          <div className="positionStickyInfo">
            <div className="positionStickyHeader">
              <p>이 포지션 면접 질문이 궁금하다면?</p>
              <Link to="">AI 면접 코치</Link>
            </div>
            <div className="positionStickyBody">
              <img src={companyInfo.companyImage} alt="회사 로고" />
              <div className="positionStickyBodyInfo">
                <p>{companyInfo.title}</p>
                <span>{companyInfo.companyName}</span>
              </div>
              <button className="positionStickyBtn">취업축하금 70만원</button>
              <div>
                {!isOpen && (
                  <button
                    onClick={openApplyModal}
                    className="positionStickyResumeBtn"
                  >
                    <Link to="" className="positionStickyResumeBtnStyle">
                      지원하기
                    </Link>
                  </button>
                )}
                {isOpen && <ApplyModalStyle setIsOpen={setIsOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
