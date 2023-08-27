import React, { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import './ResumeCard.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

export default function ResumeCard({ resume, onClick }) {
  const [resumeInfo, setResumeInfo] = useState(resume);
  const [isActive, setIsActive] = useState(resumeInfo.display);

  useEffect(() => {
    fetch(`data/data.json`).then(res => res.json());
    // `${BASE_URL}/resumes`,
    // , {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({ accessToken: token }),
    // }
  }, [resumeInfo]);

  const handleDisplay = () => {
    setIsActive(!isActive);
    setResumeInfo(prev => ({
      ...prev,
      display: prev.display === 1 ? 0 : 1,
    }));
    console.log(resumeInfo);
  };

  return (
    <div className="resumeCard" onClick={onClick}>
      <HiOutlineDotsVertical className="threeDotsVertical" />
      <div className="resumeCardTop">
        <h3 className="resumeCardTitle">{resumeInfo.title}</h3>
        <div className="resumeCardStatus">
          <div className="resumeInfoStatus">
            기본정보 <BsDot className="greenLight" />
          </div>
          <div className="resumeInfoStatus">
            기술스택 <BsDot />
          </div>
          <div className="resumeInfoStatus">
            학력 <BsDot />
          </div>
        </div>
      </div>
      <div className="resumeCardBottom">
        <div className="hideAndShowToggle">
          <button
            className={`toggle-button ${isActive ? 'active' : ''}`}
            onClick={handleDisplay}
          >
            <div className="slider"></div>
          </button>
          <span>{isActive ? '공개' : '비공개'}</span>
          <div className="questionMark">?</div>
        </div>
        <span className="resumeRegistrationDate">{resumeInfo.createdAt}</span>
      </div>
    </div>
  );
}
