import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrBriefcase, GrMailOption, GrCalendar, GrPhone } from 'react-icons/gr';
import { SiGithub, SiNotion, SiBlogger } from 'react-icons/si';
import { TbTrash } from 'react-icons/tb';
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

const FIELDS = [
  '서버/백엔드 개발자',
  '프론트엔드 개발자',
  '웹 풀스택 개발자',
  '안드로이드 개발자',
  'IOS 개발자',
  '크로스플랫폼 개발자',
  '게임 클라이언트 개발자',
  '게임 서버 개발자',
  'DBA',
  '빅데이터 엔지니어',
  '인공지능/머신러닝',
  '웹퍼블리셔',
];

const LINKS = [
  {
    icon: <SiGithub className="linkIcon" />,
    title: 'Github',
    placeholder: 'https://github.com',
    name: 'githubUrl',
    value: '',
  },
  {
    icon: <SiNotion className="linkIcon" />,
    title: 'Notion',
    placeholder: 'https://notion.so',
    name: 'notionUrl',
    value: '',
  },
  {
    icon: <SiBlogger className="linkIcon" />,
    title: 'Blog',
    placeholder: 'https://blog.jumpit.co.kr',
    name: 'blogUrl',
    value: '',
  },
];

const userName = localStorage.getItem('username');
const userEmail = localStorage.getItem('email');

export default function ResumeDetail() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    userId: '',
    title: '새로운 이력서',
    display: 0,
    githubUrl: LINKS[0].value,
    notionUrl: LINKS[1].value,
    blogUrl: LINKS[2].value,
    education: [
      {
        graduatedYear: '',
        graduatedMonth: '',
        schoolType: '',
        schoolName: '',
      },
    ],
    career: [
      {
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        companyName: '',
        divison: '',
        role: '',
        developer: 0,
      },
    ],
    project: [
      {
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        projectName: '',
        repositoryLink: '',
      },
    ],
    addfile: [
      {
        originFileName: '',
        uploadedFileName: '',
        fileUrl: '',
      },
    ],
  });

  const handleAddEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          graduatedYear: '',
          graduatedMonth: '',
          schoolType: '',
          schoolName: '',
        },
      ],
    }));
  };

  const handleDeleteEducation = index => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);

    setResumeData(prevData => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  //${BASE_URL}/resumes/${resumeId}
  // useEffect(() => {
  //   fetch(`/data/data.json`)
  //     .then(res => res.json())
  //     .then(data => setResumeData(data));
  // }, []);

  return (
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
          <div className="resumeTitle">{resumeData.title}</div>

          <div className="resumeContent">
            <div className="userInfos">
              {resumeData.userImg && (
                <div className="profileImgBox">
                  <img src="" alt="프로필 이미지" />
                </div>
              )}
              <div className="basicInfos">
                <h1 className="userName">{userName}</h1>
                <div className="basicInfoTop">
                  <div className="userEmail">
                    <GrMailOption />
                    <p>{userEmail}</p>
                  </div>
                  <div className="careerYear">
                    <GrBriefcase />
                    <select
                      name="careerYearSelect"
                      className="careerYearSelect"
                    >
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
                    <p>+82 </p>
                    <input
                      type="number"
                      className="phoneNumberInput"
                      placeholder="00000000000"
                    />
                  </div>
                  <div className="display">이력서 공개</div>
                </div>
                <div className="basicInfoMessage">
                  · 지원 현황에 대한 정보 및 포지션 추천정보를 받아볼 연락처를
                  입력해주세요
                </div>
              </div>
            </div>

            <div className="dvelopmentField">
              <h1>개발 직무</h1>
              <select name="fields" className="fieldSelect">
                {FIELDS.map(field => (
                  <option value={field} key={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
            <div className="techStacks">
              <h1>기술스택(업무 툴/스킬)</h1>
              <input type="text" className="stackInput" />
            </div>

            <div className="links">
              <h1 className="tableName">링크</h1>
              {LINKS.map(({ icon, title, placeholder, name, value }) => (
                <div className="linkDiv" key={name}>
                  {icon}
                  <div className="linkTextBox">
                    <h2 className="linkTitle">{title}</h2>
                    <input
                      type="text"
                      className="linkInput"
                      placeholder={placeholder}
                      name={name}
                      value={value}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="education">
              <h1 className="tableName">학력</h1>
              {resumeData.education.map((education, i) => (
                <div className="educationItem" key={i}>
                  <div className="WhenGraduated">
                    <div className="dateInputs">
                      <input
                        type="number"
                        className="graduatedYear"
                        name="graduatedYear"
                        placeholder="YYYY"
                        value={education.graduatedYear}
                      />
                      .
                      <input
                        type="number"
                        className="graduatedMonth"
                        name="graduatedMonth"
                        placeholder="MM"
                        value={education.graduatedMonth}
                      />
                    </div>
                    <p>졸업(예정)</p>
                  </div>
                  <div className="whereSchool">
                    <div className="schoolInfo">
                      <select name="schoolType" className="schoolType">
                        <option
                          disabled
                          selected
                          value=""
                          className="selectPlaceholder"
                        >
                          학력 구분
                        </option>
                        <option value="고등학교">고등학교</option>
                        <option value="대학(2,3년)">대학(2,3년)</option>
                        <option value="대학교(4년)">대학교(4년)</option>
                        <option value="대학원(석사)">대학원(석사)</option>
                        <option value="대학원(박사)">대학원(박사)</option>
                      </select>
                      <input
                        type="text"
                        className="schoolName"
                        name="schoolName"
                        placeholder="학교명을 입력해주세요."
                      />
                    </div>
                  </div>
                  <button
                    className="deleteEducationButton"
                    onClick={() => handleDeleteEducation(i)}
                  >
                    <TbTrash />
                  </button>
                </div>
              ))}
              <button
                className="addEducationButton"
                onClick={handleAddEducation}
              >
                <span className="plusMark">+</span>
                학력 추가
              </button>
            </div>

            <div className="career">
              <h1 className="tableName">경력</h1>
              {resumeData.career.map((career, i) => (
                <div className="careerItem" key={i}>
                  <div className="careerItemLeft"></div>
                  <div className="careerItemRight"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
