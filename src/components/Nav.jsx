import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
          <FiSearch />
          <input type="text" placeholder="Search..." />
          {/* <FiMenu /> */}
        </div>
      </div>

      <div className="NavBottom">
        <div className="categories">
          {NAV_CATEGORIES.map(([name, path]) => (
            <Link to={path} key={name}>
              {name}
            </Link>
          ))}
        </div>
        <div className="userInfo">
          <Link to="#">박동철 님</Link>
          <Link to="#">기업 서비스</Link>
        </div>
      </div>
    </nav>
  );
}
