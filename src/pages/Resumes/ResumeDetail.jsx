import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GrBriefcase, GrMailOption, GrCalendar, GrPhone } from 'react-icons/gr';
import { SiGithub, SiNotion, SiBlogger } from 'react-icons/si';
import { TbTrash, TbFolderDown } from 'react-icons/tb';
import './ResumeDetail.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

const CATEGORIES = [
  { name: '기본정보', scrollY: 0, star: 'redStar' },
  { name: '사진', scrollY: 0, star: '' },
  { name: '간단소개', scrollY: 0, star: '' },
  { name: '개발직무', scrollY: 0, star: '' },
  { name: '기술스택', scrollY: 0, star: 'redStar' },
  { name: '링크', scrollY: 0.6, star: '' },
  { name: '학력', scrollY: 1.05, star: 'redStar' },
  { name: '경력', scrollY: 1.3, star: 'greyStar' },
  { name: '프로젝트', scrollY: 1.75, star: 'greyStar' },
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

const userName = localStorage.getItem('username');
const userEmail = localStorage.getItem('email');
const token = localStorage.getItem('token');

export default function ResumeDetail() {
  const { resumeId } = useParams();

  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState({
    userId: null,
    title: '',
    display: 0,
    githubUrl: '',
    notionUrl: '',
    blogUrl: '',
    educations: [
      {
        graduatedYear: '',
        graduatedMonth: '',
        schoolType: '',
        schoolName: '',
      },
    ],
    careers: [
      {
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        companyName: '',
        divison: '',
        role: '',
        developer: 1,
      },
    ],
    projects: [
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

  const LINKS = [
    {
      icon: <SiGithub className="linkIcon" />,
      title: 'Github',
      placeholder: 'https://github.com',
      name: 'githubUrl',
      value: resumeData.githubUrl,
    },
    {
      icon: <SiNotion className="linkIcon" />,
      title: 'Notion',
      placeholder: 'https://notion.so',
      name: 'notionUrl',
      value: resumeData.notionUrl,
    },
    {
      icon: <SiBlogger className="linkIcon" />,
      title: 'Blog',
      placeholder: 'https://blog.jumpit.co.kr',
      name: 'blogUrl',
      value: resumeData.blogUrl,
    },
  ];
  const [isActive, setIsActive] = useState(resumeData.display);

  const handleScroll = scrollY => {
    window.scrollTo({
      top: scrollY * window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleDisplay = () => {
    setIsActive(!isActive);
    setResumeData(prev => ({
      ...prev,
      display: prev.display === 1 ? 0 : 1,
    }));
  };

  const handleAddEducation = () => {
    setResumeData(prev => ({
      ...prev,
      educations: [
        ...prev.educations,
        {
          graduatedYear: '',
          graduatedMonth: '',
          schoolType: '',
          schoolName: '',
        },
      ],
    }));
  };
  const handleAddCareer = () => {
    setResumeData(prev => ({
      ...prev,
      careers: [
        ...prev.careers,
        {
          startYear: '',
          startMonth: '',
          endYear: '',
          endMonth: '',
          companyName: '',
          divison: '',
          role: '',
          developer: 1,
        },
      ],
    }));
  };
  const handleAddProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          startYear: '',
          startMonth: '',
          endYear: '',
          endMonth: '',
          projectName: '',
          repositoryLink: '',
        },
      ],
    }));
  };

  const handleDeleteEducation = index => {
    const updatedEducation = resumeData.educations.filter(
      (_, i) => i !== index,
    );

    setResumeData(prevData => ({
      ...prevData,
      educations: updatedEducation,
    }));
  };
  const handleDeleteCareer = index => {
    const updatedCareer = resumeData.careers.filter((_, i) => i !== index);

    setResumeData(prevData => ({
      ...prevData,
      careers: updatedCareer,
    }));
  };
  const handleDeleteProject = index => {
    const updatedProject = resumeData.projects.filter((_, i) => i !== index);

    setResumeData(prevData => ({
      ...prevData,
      projects: updatedProject,
    }));
  };
  const handleDeleteFile = index => {
    const updatedFile = resumeData.addfile.filter((_, i) => i !== index);

    setResumeData(prevData => ({
      ...prevData,
      addfile: updatedFile,
    }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(resumeData);

  const handleEducation = (e, i) => {
    const { name, value } = e.target;

    setResumeData(prev => {
      const updatedEducation = [...prev.educations];
      updatedEducation[i] = { ...updatedEducation[i], [name]: value };

      return {
        ...prev,
        educations: updatedEducation,
      };
    });
  };

  const handleCareer = (e, i) => {
    const { name, value, type, checked } = e.target;

    setResumeData(prev => {
      const updatedCareer = [...prev.careers];
      if (type === 'checkbox') {
        updatedCareer[i] = { ...updatedCareer[i], [name]: checked ? 0 : 1 };
      } else {
        updatedCareer[i] = { ...updatedCareer[i], [name]: value };
      }

      return {
        ...prev,
        careers: updatedCareer,
      };
    });
  };

  const handleProject = (e, i) => {
    const { name, value } = e.target;

    setResumeData(prev => {
      const updatedProject = [...prev.projects];
      updatedProject[i] = { ...updatedProject[i], [name]: value };

      return {
        ...prev,
        projects: updatedProject,
      };
    });
  };

  useEffect(() => {
    if (resumeId !== undefined) {
      fetch(`http://10.58.52.249:3000/resumes/${resumeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      })
        .then(res => res.json())
        .then(data => console.log(data.data[0]));
    }
  }, []);

  const handleResumePost = () => {
    fetch(`http://10.58.52.249:3000/resumes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `${token}`,
      },
      body: JSON.stringify(resumeData),
    })
      .then(res => res.json())
      .then(() => {
        navigate('/resumes');
      });
  };

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
              {CATEGORIES.map((category, i) => (
                <li
                  className="categoryItem"
                  key={i}
                  onClick={() => handleScroll(category.scrollY)}
                >
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
          <div className="resumeTitle">
            <input
              className="titleInput"
              placeholder="👉 새로운 이력서 이름을 입력해주세요 👈"
              type="text"
              maxLength={25}
              name="title"
              value={resumeData.title}
              onChange={handleInputChange}
            />
          </div>

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
                  <div className="careersYear">
                    <GrBriefcase />
                    <select
                      name="careersYearSelect"
                      className="careersYearSelect"
                    >
                      {CAREER.map(careers => (
                        <option value={careers.value} key={careers.value}>
                          {careers.text}
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
                  <div className="displayToggle">
                    <button
                      className={`toggle-button ${isActive ? 'active' : ''}`}
                      onClick={handleDisplay}
                    >
                      <div className="slider"></div>
                    </button>
                    <span>{resumeData.display ? '공개' : '비공개'}</span>
                    <div className="questionMark">?</div>
                  </div>
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
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="educations">
              <h1 className="tableName">학력</h1>
              {resumeData.educations &&
                resumeData.educations.map((educations, i) => (
                  <div className="educationsItem" key={i}>
                    <div className="WhenGraduated">
                      <div className="dateInputs">
                        <input
                          type="number"
                          className="year"
                          name="graduatedYear"
                          placeholder="YYYY"
                          value={educations.graduatedYear}
                          onChange={e => handleEducation(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          name="graduatedMonth"
                          placeholder="MM"
                          value={educations.graduatedMonth}
                          onChange={e => handleEducation(e, i)}
                        />
                      </div>
                      <p>졸업(예정)</p>
                    </div>
                    <div className="whereSchool">
                      <div className="schoolInfo">
                        <select
                          name="schoolType"
                          className="schoolType"
                          value={educations.schoolType}
                          onChange={e => handleEducation(e, i)}
                        >
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
                          value={educations.schoolName}
                          onChange={e => handleEducation(e, i)}
                        />
                      </div>
                    </div>
                    <button
                      className="deleteButton"
                      onClick={() => handleDeleteEducation(i)}
                    >
                      <TbTrash />
                    </button>
                  </div>
                ))}
              <button className="addButton" onClick={handleAddEducation}>
                <span className="plusMark">+</span>
                학력 추가
              </button>
            </div>

            <div className="careers">
              <h1 className="tableName">경력</h1>
              {resumeData.careers &&
                resumeData.careers.map((careers, i) => (
                  <div className="careersItem" key={i}>
                    <div className="careersItemLeft">
                      <div className="dateInputs">
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          value={careers.startYear}
                          name="startYear"
                          onChange={e => handleCareer(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          value={careers.startMonth}
                          name="startMonth"
                          onChange={e => handleCareer(e, i)}
                        />
                        -
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          value={careers.endYear}
                          name="endYear"
                          onChange={e => handleCareer(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          value={careers.endMonth}
                          name="endMonth"
                          onChange={e => handleCareer(e, i)}
                        />
                      </div>
                    </div>
                    <div className="careersItemRight">
                      <div className="careersItemRightTop">
                        <input
                          type="text"
                          className="companyName"
                          placeholder="회사명을 입력해주세요"
                          value={careers.companyName}
                          name="companyName"
                          onChange={e => handleCareer(e, i)}
                        />
                        <div className="buttonSection">
                          <div>
                            <input
                              type="checkbox"
                              className="notDeveloper"
                              checked={!careers.developer}
                              name="developer"
                              onChange={e => handleCareer(e, i)}
                            />
                            <span>비개발</span>
                          </div>
                          <button
                            className="deleteButton"
                            onClick={() => handleDeleteCareer(i)}
                          >
                            <TbTrash />
                          </button>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="careersInput"
                        placeholder="부서명"
                        value={careers.divison}
                        name="divison"
                        onChange={e => handleCareer(e, i)}
                      />
                      <input
                        type="text"
                        className="careersInput"
                        placeholder="직책"
                        value={careers.role}
                        name="role"
                        onChange={e => handleCareer(e, i)}
                      />
                    </div>
                  </div>
                ))}
              <button className="addButton" onClick={handleAddCareer}>
                <span className="plusMark">+</span>
                경력 추가
              </button>
            </div>

            <div className="projects">
              <h1 className="tableName">프로젝트</h1>
              {resumeData.projects &&
                resumeData.projects.map((projects, i) => (
                  <div className="projectItem" key={i}>
                    <div className="projectItemLeft">
                      <div className="dateInputs">
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          name="startYear"
                          value={projects.startYear}
                          onChange={e => handleProject(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          name="startMonth"
                          value={projects.startMonth}
                          onChange={e => handleProject(e, i)}
                        />
                        -
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          name="endYear"
                          value={projects.endYear}
                          onChange={e => handleProject(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          name="endMonth"
                          value={projects.endMonth}
                          onChange={e => handleProject(e, i)}
                        />
                      </div>
                    </div>
                    <div className="projectItemRight">
                      <div className="projectItemRightTop">
                        <input
                          type="text"
                          className="companyName"
                          placeholder="프로젝트명을 입력해주세요"
                          name="projectName"
                          value={projects.projectName}
                          onChange={e => handleProject(e, i)}
                        />
                        <div className="buttonSection">
                          <button
                            className="deleteButton"
                            onClick={() => handleDeleteProject(i)}
                          >
                            <TbTrash />
                          </button>
                        </div>
                      </div>
                      <p className="repoLinkPtag">저장소 링크</p>
                      <input
                        type="text"
                        className="projectInput"
                        placeholder="https://github.com"
                        name="repositoryLink"
                        value={projects.repositoryLink}
                        onChange={e => handleProject(e, i)}
                      />
                    </div>
                  </div>
                ))}
              <button className="addButton" onClick={handleAddProject}>
                <span className="plusMark">+</span>
                프로젝트 추가
              </button>
            </div>
          </div>

          <div className="resumeCenterBottom">
            <div className="files">
              <h1 className="tableName">첨부파일</h1>
              <p className="addFileMessage">
                경험을 보여줄 수 있는 포트폴리오 / 경력기술서 등을 첨부해보세요.
                (PDF를 권장합니다.)
              </p>
              {!resumeData.addfile && (
                <ul className="fileItem">
                  <li className="fileIsNull">첨부파일이 비어있습니다.</li>
                </ul>
              )}
              {resumeData.addfile &&
                resumeData.addfile.map((file, i) => (
                  <ul className="fileItem" key={i}>
                    {file.originFileName ? (
                      <li className="fileBox">
                        <a
                          href={file.fileUrl}
                          target="blank"
                          rel="noopener noreferrer"
                        >
                          <TbFolderDown className="folderIcon" />
                          {file.uploadedFileName}
                        </a>
                        <button
                          className="deleteButton"
                          onClick={() => handleDeleteFile(i)}
                        >
                          <TbTrash />
                        </button>
                      </li>
                    ) : (
                      <li className="fileIsNull">첨부파일이 비어있습니다.</li>
                    )}
                  </ul>
                ))}
              <button className="addButton">
                <span className="plusMark">+</span>
                첨부파일 추가
              </button>
            </div>
          </div>
        </div>
        <div className="resumeBottomBar">
          <div className="barContent">
            <p className="barMessage">
              👨‍💻 역량을 표현하는 <span>기술스택</span>을 등록해주세요!
            </p>
            <div className="barButtons">
              <button className="previewButton">미리보기</button>
              <button className="saveButton" onClick={handleResumePost}>
                저장하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
