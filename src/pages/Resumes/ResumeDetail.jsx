import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrBriefcase, GrMailOption, GrCalendar, GrPhone } from 'react-icons/gr';
import './ResumeDetail.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

const CATEGORIES = [
  { name: '기본정보', scrollY: 0, star: 'redStar' },
  { name: '사진', scrollY: 1, star: '' },
  { name: '간단소개', scrollY: 2, star: '' },
  { name: '개발직무', scrollY: 3, star: '' },
  { name: '기술스택', scrollY: 4, star: 'redStar' },
  { name: '링크', scrollY: 5, star: '' },
  { name: '학력', scrollY: 6, star: 'redStar' },
  { name: '경력', scrollY: 7, star: 'greyStar' },
  { name: '프로젝트', scrollY: 8, star: 'greyStar' },
  { name: '교육이력', scrollY: 9, star: '' },
  { name: '기타사항', scrollY: 10, star: '' },
  { name: '자기소개서', scrollY: 11, star: '' },
  { name: '첨부파일', scrollY: 12, star: 'greyStar' },
];

const CAREER = [
  { text: '신입', value: 0 },
  { text: '1년차', value: 1 },
  { text: '2년차', value: 2 },
  { text: '3년차', value: 3 },
  { text: '4년차', value: 4 },
  { text: '5년차', value: 5 },
  { text: '6년차', value: 6 },
  { text: '7년차', value: 7 },
  { text: '8년차', value: 8 },
  { text: '9년차', value: 9 },
  { text: '10년차 이상', value: 'More Than 10' },
];

const userName = localStorage.getItem('username');
const email = localStorage.getItem('email');

export default function ResumeDetail() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({});

  //${BASE_URL}/resumes/${resumeId}
  useEffect(() => {
    fetch(`/data/data.json`)
      .then(res => res.json())
      .then(data => setResumeData(data));
  }, []);

  return (
    resumeData.length > 0 && (
      <div className="resumeDetail">
        <div className="resumeDetailContainer">
          <div className="resumeLeft">
            <div className="resumeMenu">
              <div className="resumeMenuTitle">
                <h1>항목 편집 ✍</h1>
                <div className="resumeMenuTitlePtags">
                  <p>
                    필수 항목 <span className="redStar">*</span>
                  </p>
                  <p>
                    선택필수 항목 <span className="greyStar">*</span>
                  </p>
                </div>
              </div>
              <ul className="resumeCategories">
                {CATEGORIES.map(category => (
                  <li className="categoryItem" key={category.scrollY}>
                    {category.name}
                    {category.star !== '' && (
                      <span className={category.star}>*</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="resumeLeftBottom">
              <h1 className="resumeRequest">
                이력서에 초록불<span className="greenCircle">●</span>을 켜주세요
              </h1>
              <div className="statusDiv">
                <div className="status">
                  <p>
                    기본정보 <span className="greenCircle mini">●</span>
                  </p>
                  <p>
                    기술스택 <span className="greenCircle mini">●</span>
                  </p>
                </div>
                <div className="status">
                  <p>
                    학력 <span className="greenCircle mini">●</span>
                  </p>
                  <p>
                    경력 <span className="greenCircle mini">●</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resumeCenter">
            <div className="resumeTitle">{resumeData[0].title}</div>
            <div className="resumeContent">
              <div className="userInfos">
                <div className="profileImgBox">
                  <img src="" alt="프로필 이미지" />
                </div>
                <div className="basicInfos">
                  <h1 className="userName">{userName}</h1>
                  <div className="basicInfoTop">
                    <div className="userEmail">
                      <GrMailOption />
                      <p>{email}</p>
                    </div>
                    <div className="careerYear">
                      <GrBriefcase />
                      <select name="careerYearSelect">
                        {CAREER.map(career => (
                          <option value={career.value} key={career.value}>
                            {career.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="basicInfoBottom">
                    <div className="birthYear">
                      <GrCalendar />
                      <input
                        type="number"
                        className="birthYearInput"
                        placeholder="YYYY"
                      />
                      <p>년생</p>
                    </div>
                    <div className="phoneNumber">
                      <GrPhone />
                      <p>+82</p>
                      <input
                        type="number"
                        className="phoneNumberInput"
                        placeholder="00000000000"
                      />
                    </div>
                    <div className="display">이력서 공개</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
