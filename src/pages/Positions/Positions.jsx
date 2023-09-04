import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card.jsx';
import PositionBtn from '../Positions/PositionBtn.jsx';
import './Positions.scss';

export default function Positions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [companyList, setCompanyList] = useState([]);
  const [jobCategoryList, setJobCategoryList] = useState({});

  const handleClick = () => {
    searchParams.delete('jobCategory');
    setSearchParams(searchParams);
  };

  const jobBtnClick = categoryId => {
    const hasSelected = searchParams
      .getAll('jobCategory')
      .includes(String(categoryId));

    if (hasSelected) {
      const newSearchParams = searchParams
        .getAll('jobCategory')
        .filter(id => id !== String(categoryId));

      searchParams.delete('jobCategory');

      newSearchParams.forEach(param => {
        searchParams.append('jobCategory', param);
      });

      setSearchParams(searchParams);

      return;
    }

    if (searchParams.getAll('jobCategory').length >= 5) {
      alert('최대 5개까지 선택하실 수 있습니다.');

      return;
    }

    searchParams.append('jobCategory', categoryId);
    setSearchParams(searchParams);
  };

  const handleSort = sortStatus => {
    searchParams.set('sort', sortStatus);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`http://10.58.52.149:3000/positions?${searchParams}`)
      .then(response => response.json())
      .then(job => {
        setJobCategoryList(job.jobTypes);
        setCompanyList(job.jobPostings);
      });
  }, [searchParams]);

  const isAll = searchParams.getAll('jobCategory').length === 0;

  return (
    <div className="positions">
      <div className="positionContainer">
        <div className="positionSearch">직무 탐색</div>
        <div className="positionList">
          <button
            className={`positionBtn ${isAll ? 'clicked' : ''}`}
            onClick={handleClick}
          >
            전체
          </button>
          {jobCategoryList.length > 0 &&
            jobCategoryList.map(jobCategory => (
              <PositionBtn
                key={jobCategory.jobTypeId}
                title={jobCategory.jobTypeTitle}
                isSelected={searchParams
                  .getAll('jobCategory')
                  .includes(String(jobCategory.jobTypeId))}
                onClick={() => jobBtnClick(jobCategory.jobTypeId)}
              />
            ))}
        </div>
      </div>
      <div className="cardListDiv">
        <div className="cardListDivBtnStyle">
          <button onClick={() => handleSort('popular')}>조회순</button>
          <button onClick={() => handleSort('reg_dt')}>최신순</button>
        </div>
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
