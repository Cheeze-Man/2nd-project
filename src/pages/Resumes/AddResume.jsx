import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import './AddResume.scss';

export default function AddResume() {
  return (
    <Link className="addResume" to="/resume">
      <div className="plusIconDiv">
        <FaPlus className="plusIcon" />
      </div>
      <p className="addResumeMessage">새로운 이력서를 추가해보세요!</p>
    </Link>
  );
}
