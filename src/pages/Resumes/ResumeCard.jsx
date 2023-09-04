import React, { useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { BsDot } from 'react-icons/bs';
import './ResumeCard.scss';

const token = localStorage.getItem('token');

export default function ResumeCard({ resume, onClick }) {
  const [resumeInfo, setResumeInfo] = useState(resume);
  const [isActive, setIsActive] = useState(resumeInfo.display);

  const handleDisplay = () => {
    setIsActive(!isActive);
    setResumeInfo(prev => ({
      ...prev,
      display: prev.display === 1 ? 0 : 1,
    }));
  };

  const handleDeleteResumeCard = () => {
    const deleteId = resumeInfo.resumeId;
    fetch(`http://10.58.52.149:3000/resumes/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `${token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          window.location.reload();

          return;
        }

        res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="resumeCard">
      <button className="deleteButton" onClick={handleDeleteResumeCard}>
        <TbTrash />
      </button>
      <div className="resumeCardTop" onClick={onClick}>
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
