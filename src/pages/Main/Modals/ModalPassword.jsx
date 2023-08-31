import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { passwordPattern } from '../../../util/constants';
import './Modals.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

export default function ModalPassword({ email, handleModal }) {
  const [password, setPassword] = useState('');

  const isValidPassword = passwordPattern.test(password);

  const closeModal = () => {
    handleModal();
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePostUserInfo = () => {
    fetch(`http://10.58.52.134:3000/users/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('email', data.email);
          localStorage.setItem('username', data.username);
          closeModal();
        } else {
          const message = data.message;
          if (message === 'INVALID_USER') {
            alert('비밀 번호를 확인해주세요.');
          }
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
