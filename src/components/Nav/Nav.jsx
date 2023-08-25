import React from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const NAV_CATEGORIES = [
  {
    title: '직무 탐색',
    path: '/jobsearch',
  },
  {
    title: '이력서',
    path: '/resumes',
  },
];

export default function Nav() {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  return (
    <nav className="nav">
      <div className="navTop">
        <img
          src="images/logo.png"
          alt="점핏."
          onClick={() => {
            navigate('/');
          }}
        />
        <div className="searchBar">
          <FiSearch className="searchIcon" />
          <input
            className="seachBarInput"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
        </div>
      </div>
      <div className="navBottom">
        <div className="categories">
          {NAV_CATEGORIES.map(({ title, path }, i) => (
            <Link to={path} key={i} className="categoryLink">
              {title}
            </Link>
          ))}
        </div>
        <div className="userServise">
          <div className="userInfo">
            <Link to="#" className="userInfoLink">
              {username}
            </Link>
            <span> 님 </span>
            <FiChevronDown className="iconDown" />
            <span>ㆍ</span>
          </div>
          <Link to="#" className="companyService">
            {' '}
            기업 서비스
          </Link>
        </div>
      </div>
    </nav>
  );
}
