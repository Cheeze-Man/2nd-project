import React, { useEffect, useRef, useState } from 'react';
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
    email: '',
    birthday: '',
    phoneNumber: '',
    title: '',
    display: 0,
    githubUrl: '',
    notionUrl: '',
    blogUrl: '',
    resumeEducation: [
      {
        graduatedYear: '',
        graduatedMonth: '',
        schoolType: '',
        schoolName: '',
      },
    ],
    resumeCareer: [
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
    resumeProject: [
      {
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        projectName: '',
        repositoryLink: '',
      },
    ],
    resumeAddFile: [],
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
  const titleInputRef = useRef(null);

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
      resumeEducation: [
        ...prev.resumeEducation,
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
      resumeCareer: [
        ...prev.resumeCareer,
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
      resumeProject: [
        ...prev.resumeProject,
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
    const updatedEducation = resumeData.resumeEducation.filter(
      (_, i) => i !== index,
    );

    setResumeData(prevData => ({
      ...prevData,
      resumeEducation: updatedEducation,
    }));
  };
  const handleDeleteCareer = index => {
    const updatedCareer = resumeData.resumeCareer.filter((_, i) => i !== index);

    setResumeData(prevData => ({
      ...prevData,
      resumeCareer: updatedCareer,
    }));
  };
  const handleDeleteProject = index => {
    const updatedProject = resumeData.resumeProject.filter(
      (_, i) => i !== index,
    );

    setResumeData(prevData => ({
      ...prevData,
      resumeProject: updatedProject,
    }));
  };
  // const handleDeleteFile = index => {
  //   const updatedFile = resumeData.resumeAddFile.filter((_, i) => i !== index);

  //   setResumeData(prevData => ({
  //     ...prevData,
  //     resumeAddFile: updatedFile,
  //   }));
  // };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEducation = (e, i) => {
    const { name, value } = e.target;

    setResumeData(prev => {
      const updatedEducation = [...prev.resumeEducation];
      updatedEducation[i] = { ...updatedEducation[i], [name]: value };

      return {
        ...prev,
        resumeEducation: updatedEducation,
      };
    });
  };

  const handleCareer = (e, i) => {
    const { name, value, type, checked } = e.target;

    setResumeData(prev => {
      const updatedCareer = [...prev.resumeCareer];
      if (type === 'checkbox') {
        updatedCareer[i] = { ...updatedCareer[i], [name]: checked ? 0 : 1 };
      } else {
        updatedCareer[i] = { ...updatedCareer[i], [name]: value };
      }

      return {
        ...prev,
        resumeCareer: updatedCareer,
      };
    });
  };

  const handleProject = (e, i) => {
    const { name, value } = e.target;

    setResumeData(prev => {
      const updatedProject = [...prev.resumeProject];
      updatedProject[i] = { ...updatedProject[i], [name]: value };

      return {
        ...prev,
        resumeProject: updatedProject,
      };
    });
  };

  useEffect(() => {
    if (resumeId !== undefined) {
      fetch(`http://10.58.52.134:3000/resumes/${resumeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          const updatedResumeData = {
            ...data.data[0],
            resumeEducation: data.data[0].resumeEducation || [
              {
                graduatedYear: '',
                graduatedMonth: '',
                schoolType: '',
                schoolName: '',
              },
            ],
            resumeCareer: data.data[0].resumeCareer || [
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
            resumeProject: data.data[0].resumeProject || [
              {
                startYear: '',
                startMonth: '',
                endYear: '',
                endMonth: '',
                projectName: '',
                repositoryLink: '',
              },
            ],
            resumeAddFile: data.data[0].resumeAddFile || [
              {
                fileId: '',
                fileUrl: '',
                originFileName: '',
                uploadedFileName: '',
              },
            ],
          };
          setResumeData(updatedResumeData);
        });
    }
  }, []);

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('fileInput', selectedFile);

      fetch('http://10.58.52.134:3000/uploads', {
        method: 'POST',
        headers: {
          Authorization: `${token}`,
        },
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          const path = data.path;
          const originalName = selectedFile.name;
          const uploadedName = path.split('/')[2];

          const newFile = {
            fileId: '',
            fileUrl: path,
            originFileName: originalName,
            uploadedFileName: uploadedName,
          };

          setResumeData(prev => ({
            ...prev,
            resumeAddFile: [...prev.resumeAddFile, newFile],
          }));
        })
        .catch(error => {
          console.error('파일 업로드 실패...', error);
        });
    }
  };

  const handleResumePost = () => {
    if (resumeData.title === '') {
      alert('이력서 제목은 필수 항목입니다.');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      titleInputRef.current.focus();
    } else {
      if (resumeData.resumeId) {
        fetch(`http://10.58.52.134:3000/resumes/${resumeData.resumeId}`, {
          method: 'PATCH',
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
      } else {
        fetch(`http://10.58.52.134:3000/resumes`, {
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
      }
    }
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
              ref={titleInputRef}
              className="titleInput"
              placeholder="👉 새로운 이력서 이름을 입력해주세요 👈"
              type="text"
              maxLength={25}
              name="title"
              value={resumeData.title}
              onChange={handleInputChange}
              style={
                resumeData.title === '' ? { outline: '1px solid red' } : {}
              }
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
                    <p>
                      {resumeData.email === '' ? userEmail : resumeData.email}
                    </p>
                  </div>
                  <div className="careersYear">
                    <GrBriefcase />
                    <select
                      name="careersYearSelect"
                      className="careersYearSelect"
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
                      name="birthday"
                      value={resumeData.birthday}
                      onChange={handleInputChange}
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
                      name="phoneNumber"
                      value={resumeData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="displayToggle">
                    <button
                      className={`toggle-button ${isActive ? 'active' : ''}`}
                      onClick={handleDisplay}
                    >
                      <div className="slider" />
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
              {resumeData.resumeEducation &&
                resumeData.resumeEducation.map((education, i) => (
                  <div className="educationsItem" key={i}>
                    <div className="WhenGraduated">
                      <div className="dateInputs">
                        <input
                          type="number"
                          className="year"
                          name="graduatedYear"
                          placeholder="YYYY"
                          value={education.graduatedYear}
                          onChange={e => handleEducation(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          name="graduatedMonth"
                          placeholder="MM"
                          value={education.graduatedMonth}
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
                          value={education.schoolType}
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
                          value={education.schoolName}
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
              {resumeData.resumeCareer &&
                resumeData.resumeCareer.map((career, i) => (
                  <div className="careersItem" key={i}>
                    <div className="careersItemLeft">
                      <div className="dateInputs">
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          value={career.startYear}
                          name="startYear"
                          onChange={e => handleCareer(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          value={career.startMonth}
                          name="startMonth"
                          onChange={e => handleCareer(e, i)}
                        />
                        -
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          value={career.endYear}
                          name="endYear"
                          onChange={e => handleCareer(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          value={career.endMonth}
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
                          value={career.companyName}
                          name="companyName"
                          onChange={e => handleCareer(e, i)}
                        />
                        <div className="buttonSection">
                          <div>
                            <input
                              type="checkbox"
                              className="notDeveloper"
                              checked={!career.developer}
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
                        value={career.divison}
                        name="divison"
                        onChange={e => handleCareer(e, i)}
                      />
                      <input
                        type="text"
                        className="careersInput"
                        placeholder="직책"
                        value={career.role}
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
              {resumeData.resumeProject &&
                resumeData.resumeProject.map((project, i) => (
                  <div className="projectItem" key={i}>
                    <div className="projectItemLeft">
                      <div className="dateInputs">
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          name="startYear"
                          value={project.startYear}
                          onChange={e => handleProject(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          name="startMonth"
                          value={project.startMonth}
                          onChange={e => handleProject(e, i)}
                        />
                        -
                        <input
                          type="number"
                          className="year"
                          placeholder="YYYY"
                          name="endYear"
                          value={project.endYear}
                          onChange={e => handleProject(e, i)}
                        />
                        .
                        <input
                          type="number"
                          className="month"
                          placeholder="MM"
                          name="endMonth"
                          value={project.endMonth}
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
                          value={project.projectName}
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
                        value={project.repositoryLink}
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

          <div className="fileAttachmentContainer">
            <h1>첨부파일</h1>
            <p className="fileAttachmentMessage">
              경험을 보여줄 수 있는 포트폴리오 / 경력기술서 등을 첨부해보세요.
              (PDF를 권장합니다.)
            </p>
            <ul className="files">
              {resumeData.resumeAddFile.length > 0 &&
              resumeData.resumeAddFile !== null &&
              resumeData.resumeAddFile[0].originFileName !== '' ? (
                resumeData.resumeAddFile.map((file, i) => (
                  <li className="fileItem" key={i}>
                    <a
                      href={file.fileUrl}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <TbFolderDown className="folderIcon" />
                      {file.originFileName}
                    </a>
                  </li>
                ))
              ) : (
                <li className="fileItem" style={{ cursor: 'default' }}>
                  첨부파일이 비어있습니다.
                </li>
              )}
            </ul>
            <label className="fileInputButton">
              <input
                type="file"
                onChange={handleFileChange}
                className="fileInput addButton"
                name="fileInput"
              />
              <span className="plusMark">+</span>
              첨부파일 추가
            </label>
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
