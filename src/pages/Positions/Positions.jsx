import React, { useEffect, useState } from 'react';
import './Positions.scss';
import Nav from '../../components/Nav.jsx';
import Card from '../../components/Card.jsx';
import PositionBtn from '../Positions/PositionBtn.jsx';
import PositionTechBtn from '../Positions/PositionTechBtn.jsx';

export default function Positions() {
  const [openTech, setOpenTech] = useState(false);

  function handleTechClick() {
    setOpenTech(!openTech);
  }

  const [jobData, setJobData] = useState({
    jobGroup: '',
    jobIndex: '',
    jobType: '',
  });

  const { jobGroup, jobIndex, jobType } = jobData;

  const hyungmin = () => {
    // fetch('', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     id: jobGroup,
    //     title: jobIndex,
    //     job_type_id: jobType,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(job => {
    //     setJobData(job);
    //   });
  };

  // useEffect(() => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       id: jobGroup,
  //       title: jobIndex,
  //       job_type_id: jobType,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(job => {
  //       setJobData(job);
  //     });
  // }, []);

  const [techData, setTechData] = useState({
    techImg: '',
    techList: '',
  });

  const { techImg, techList } = techData;

  useEffect(() => {
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: techImg,
        title: techList,
      }),
    })
      .then(response => response.json())
      .then(tech => {
        setTechData(tech);
      });
  }, []);

  const [cardData, setCardData] = useState({
    urlLink: '',
    imgSrc: '',
    name: '',
    title: '',
    location: '',
    career: '',
  });

  const { urlLink, imgSrc, name, title, location, career } = cardData;

  useEffect(() => {
    fetch('http://10.58.52.220:3000/positions/jobPostings')
      .then(response => response.json())
      .then(data => {
        setCardData(data);
      });
  }, []);

  return (
    <div className="positions">
      <div className="positionContainer">
        <Nav />
        <div className="positionSearch">직무 탐색</div>
        <div className="positionList">
          {/* 추후 advanced router세션 이후 기능 구현할 것 */}
          <PositionBtn handleTechClick={handleTechClick} title={jobGroup} />
        </div>
        {openTech && (
          <div>
            <PositionTechBtn techImg={techImg} techList={techList} />
          </div>
        )}
      </div>
      <div className="cardListDiv">
        <div></div>
        <div className="cardListStyle">
          <div className="cardList">
            <Card
              urlLink={urlLink}
              companyImage={imgSrc}
              companyName={name}
              title={title}
              workArea={location}
              career={career}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
