import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeCard from './ResumeCard';
import AddResume from './AddResume';
import './Resumes.scss';

export default function Resumes() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (!token && !alertShown) {
      setAlertShown(true);
      alert('로그인 시에만 이용할 수 있는 서비스입니다.');
      navigate(-1);
    }

    fetch(`http://10.58.52.134:3000/resumes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setResumes(data.data));
  }, [token, alertShown]);

  return (
    <div className="resumes">
      <div className="resumeCardsContainer">
        <h1 className="resumeCardsContainerTitle">이력서 관리</h1>
        <div className="resumeCardPlace">
          {resumes &&
            resumes.map(resume => {
              return (
                <ResumeCard
                  key={resume.resumeId}
                  resume={resume}
                  onClick={() => {
                    navigate(`/resume/${resume.resumeId}`);
                  }}
                />
              );
            })}
          <AddResume />
        </div>
      </div>
      <div className="resumeAdContainer">
        <img
          src="https://cdn.jumpit.co.kr/jumpit/resume/awesome_resume_banner.webp"
          alt="이력서 광고 배너"
        />
      </div>
    </div>
  );
}
