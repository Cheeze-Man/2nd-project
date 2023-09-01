import React from 'react';
import { TbTrash } from 'react-icons/tb';
import './MyJumpit.scss';

const username = localStorage.getItem('username');

export default function MyJumpit() {
  return (
    <div className="myJumpitBackGround">
      <div className="myJumpit">
        <div className="leftSpace">
          <div className="leftBar">
            <h1>{username}님</h1>
            <ul className="barTopMenu">
              <li>마이점핏</li>
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
          <div className="mainContents">
            <h1 className="mainTitle">마이점핏</h1>
            <div className="myJumpitNavigation">
              <div className="navigationCategories">
                <p>작성중</p>
                <h2>0</h2>
              </div>
              <div className="navigationCategories">
                <p>지원완료</p>
                <h2>0</h2>
              </div>
              <div className="navigationCategories">
                <p>서류통과</p>
                <h2>0</h2>
              </div>
              <div className="navigationCategories">
                <p>최종합격</p>
                <h2>0</h2>
              </div>
              <div className="navigationCategories">
                <p>불합격</p>
                <h2>0</h2>
              </div>
            </div>
            <div className="applyListContainer">
              <h1 className="applyListContainerTitle">지원완료 총 1건</h1>
              <ul className="applyList">
                <li>
                  <div className="applyCompnyInfo">
                    <p>놀이의 발견</p>
                    <h3>Admin 개발 (Web/Python/Django)</h3>
                  </div>
                  <div className="applyListButtons">
                    <button className="confirmButtom">지원 확인</button>
                    <button className="deleteButton">
                      <TbTrash />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
