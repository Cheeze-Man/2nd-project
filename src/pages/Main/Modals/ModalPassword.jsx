import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import './Modals.scss';

export default function ModalPassword({ email, handleModal }) {
  const [password, setPassword] = useState('');

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  const isValidPassword = passwordPattern.test(password);

  const closeModal = () => {
    handleModal();
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePostUserInfo = () => {
    fetch('API주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          localStorage.setItem('token', data.accessToken);
          closeModal();
        } else {
          alert('토큰 정보 없음.');
        }
      });
  };

  return (
    <div className="modalPassword">
      <div className="modalPasswordContainer">
        <header className="modalPasswordHeader">
          <GrClose onClick={closeModal} />
        </header>
        <main className="modalPasswordMain">
          <h1 className="modalGreeting">비밀번호 입력</h1>
          <p className="inputNameIsPassword">비밀번호</p>
          <input
            className="modalInput"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handlePostUserInfo} disabled={!isValidPassword}>
            로그인
          </button>
          <Link className="findYourPassword">비밀번호를 잊으셨나요?</Link>
        </main>
      </div>
    </div>
  );
}
