import React from 'react';
import './MyJumpit.scss';

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
const email = localStorage.getItem('email');

export default function MyJumpit() {
  return (
    <div className="myJumpitBackGround">
      <div className="myJumpit">
        <div className="leftSpace">
          <div className="leftBar">
            <h1>{username}</h1>
            <ul className="barTopMenu">
              <li>입사지원 현황</li>
              <li>취업축하금 신청 현황</li>
              <li>포지션 스크랩 리스트</li>
            </ul>
            <ul className="barBottomMenu">
              <li>계정 설정</li>
              <li>알림 설정</li>
              <li>계정 탈퇴</li>
            </ul>
          </div>
          <div className="mainContents"></div>
        </div>
      </div>
    </div>
  );
}
