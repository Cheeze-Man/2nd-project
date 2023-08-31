import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import './ApplyModalStyle.scss';

export default function ApplyModalStyle({ setIsOpen }) {
  const closeApplyModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="applyModalContainer">
      <div className="modalHeader">
        <div>입사지원</div>
        <button onClick={closeApplyModal} className="applyModalClose">
          <AiOutlineCloseCircle className="iconAiOutlineCloseCircle" />
        </button>
      </div>
      <div>
        <div className="applyModalTitle">공고제목</div>
        <p className="applyModalCompanyName">회사이름</p>
      </div>
      <div>
        <div>연락정보</div>
        <div className="applyModalInfo">
          <div className="applyModalInfoStyle">
            <div>이메일</div>
            <div>ㅁㄴㅇㄴㅁㅇ@ㅁㄴㅇ</div>
          </div>
          <div className="applyModalInfoStyle">
            <div>연락처</div>
            <div>1121213213</div>
          </div>
        </div>
      </div>
      <div>
        <div>지원 이력서</div>
        <div className="applyModalResume">
          <div>
            <input type="radio" value="" checked="checked" />
          </div>
          <div>
            <div>ㅇㅇㅇ이력서_230901</div>
            <div className="applyModalResumeStyle">
              <div>기본정보</div>
              <div>기술스택</div>
              <div>학력</div>
            </div>
            <div>2023.09.01 등록</div>
          </div>
        </div>
        <div>
          <div className="applyModalAddFile">
            <div>첨부파일</div>
            <div>첨부파일 추가</div>
          </div>
          <div className="applyModalAddFileBox">
            <p>첨부파일이 비어있습니다.</p>
            <p>PDF 첨부를 추천드려요!</p>
            <p>점핏은 인사담당자가 PDF로 보기 편하게 만들었어요 :)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
