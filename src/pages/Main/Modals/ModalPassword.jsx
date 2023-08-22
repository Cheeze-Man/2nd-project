import React from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import './Modals.scss';

export default function ModalPassword({ email, handleModal, setModalNum }) {
  const userEmail = email;

  const handleClick = () => {
    handleModal();
    setModalNum(0);
  };

  return (
    <div className="modalPassword">
      <div className="modalPasswordContainer">
        <header className="modalPasswordHeader">
          <GrClose onClick={handleClick} />
        </header>
        <main className="modalPasswordMain">
          <h1 className="modalGreeting">비밀번호 입력</h1>
          <p className="inputNameIsPassword">비밀번호</p>
          <input className="modalInput" type="password" />
          <button>로그인</button>
          <Link className="findYourPassword">비밀번호를 잊으셨나요?</Link>
        </main>
      </div>
    </div>
  );
}
