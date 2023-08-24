import React from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Nav.scss';

const NAV_CATEGORIES = [
  ['직무 탐색', '/jobsearch'],
  ['이력서', '/resume'],
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navTop">
        <img src="images/logo.png" alt="점핏." />
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
          {NAV_CATEGORIES.map(([name, path]) => (
            <Link to={path} key={name} className="categoryLink">
              {name}
            </Link>
          ))}
        </div>
        <div className="userServise">
          <div className="userInfo">
            <Link to="#" className="userInfoLink">
              ㅇㅇㅇ
            </Link>
            <span> 님 </span>
            <FiChevronDown className="iconDown" />
            <span>ㆍ</span>
          </div>
          <Link to="#"> 기업 서비스</Link>
        </div>
      </div>
    </nav>
  );
}
