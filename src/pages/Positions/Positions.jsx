import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Nav from '../../components/Nav.jsx';
import Card from '../../components/Card.jsx';
import PositionBtn from '../Positions/PositionBtn.jsx';
import './Positions.scss';

export default function Positions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [companyList, setCompanyList] = useState([]);
  const [jobCategoryList, setJobCategoryList] = useState([]);

  const handleClick = () => {
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const jobBtnClick = categoryId => {
    // 1. 이미 선택된 버튼이라면, searchParams에서 해당 부분 찾아서 제거
    const hasSelected = searchParams
      .getAll('category')
      .includes(String(categoryId));

    if (hasSelected) {
      const newSearchParams = searchParams
        .getAll('category')
        .filter(id => id !== String(categoryId));

      searchParams.delete('category');

      newSearchParams.forEach(param => {
        searchParams.append('category', param);
      });

      setSearchParams(searchParams);

      return;
    }

    if (searchParams.getAll('category').length >= 5) {
      alert('최대 5개까지 선택하실 수 있습니다.');

      return;
    }

    // 2. 선택되지 않은 버튼이라면, searchParams에 추가
    searchParams.append('category', categoryId);
    setSearchParams(searchParams);
  };

  console.log(searchParams.getAll('category'));

  //   2. 직무 버튼 선택/선택취소 시,
  //   2-1. 해당 직무 회사 리스트 GET
  useEffect(() => {
    // 1. 데이터는 여기서만 받아오면 됨!
    // 2. 그 데이터를 받아오기 위한 조건은, 직무 버튼을 눌러서 searchParams가 변경되었을 때
    // 3. 그래서 의존성 배열에 searchParams 넣어 둠
    // 4. searchParams를 토대로, 동적인 GET 요청이 가능함 -> API 확인 필요
    // fetch(`회사 리스트 GET API/positions?${searchParams}`)
    fetch(`API/positions?${searchParams}`)
      .then(response => response.json())
      .then(job => {
        setCompanyList(job);
      });
  }, [searchParams]);

  // 1. 직무 버튼 리스트 GET
  useEffect(() => {
    fetch('/data/jobCategoryData.json')
      .then(response => response.json())
      .then(data => {
        setJobCategoryList(data);
      });
  }, []);

  const isAll = searchParams.getAll('category').length === 0;

  //   2-2. (추가구현) 해당 직무 스택 리스트 GET
  //   3. (추가구현) 스택 버튼 선택/선택취소 시,
  //   3-1. (추가구현) 회사 리스트 GET

  return (
    <div className="positions">
      <div className="positionContainer">
        <Nav />
        <div className="positionSearch">직무 탐색</div>
        <div className="positionList">
          <button
            className={`positionBtn ${isAll ? 'clicked' : ''}`}
            onClick={handleClick}
          >
            전체
          </button>
          {jobCategoryList.map(jobCategory => (
            <PositionBtn
              key={jobCategory.id}
              title={jobCategory.category}
              isSelected={searchParams
                .getAll('category')
                .includes(String(jobCategory.id))}
              onClick={() => jobBtnClick(jobCategory.id)}
            />
          ))}
        </div>
      </div>
      <div className="cardListDiv">
        <div></div>
        <div className="cardListStyle">
          <div className="cardList">
            {companyList.map(
              ({
                jobpostingId,
                companyImage,
                companyName,
                jobPostingTitle,
                workArea,
                career,
              }) => (
                <Card
                  key={jobpostingId}
                  urlLink={jobpostingId}
                  companyImage={companyImage}
                  companyName={companyName}
                  title={jobPostingTitle}
                  workArea={workArea}
                  career={career}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
