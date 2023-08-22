import React from 'react';
import { GrClose } from 'react-icons/gr';
import './Modals.scss';

export default function ModalJoin({ handleModal, setModalNum }) {
  const handleClick = () => {
    handleModal();
    setModalNum(0);
  };

  return (
    <div className="modalJoin">
      <div className="modalJoinContainer">
        <header className="modalJoinHeader">
          <GrClose onClick={handleClick} />
        </header>
        <main className="modalJoinMain">
          <h1 className="modalGreeting">화원 가입</h1>
          <label htmlFor="email">
            <p className="inputNameIsEmail">이메일</p>
            <input
              className="modalInput"
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
            />
          </label>
          <label htmlFor="username">
            <p className="inputNameIsUsername">이름</p>
            <input
              className="modalInput"
              type="text"
              name="username"
              placeholder="이름을 입력해주세요"
            />
          </label>
          <label htmlFor="password">
            <p className="inputNameIsuserPassword">비밀번호</p>
            <input
              className="modalInput"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </label>
          {/* <label htmlFor="">
            <input type="checkbox" name="agreement">
              만 15세 이상입니다.
            </input>
            <input type="checkbox" name="agreement1" />
            <input type="checkbox" name="agreement2" />
            <input type="checkbox" name="agreement3" />
            <input type="checkbox" name="agreement4" />
          </label> */}
          <button>회원가입</button>
        </main>
      </div>
    </div>
  );
}
