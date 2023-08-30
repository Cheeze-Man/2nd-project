import React from 'react';
import { GrClose } from 'react-icons/gr';
import './LoginModal.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

export default function LoginModal({
  handleModal,
  email,
  setEmail,
  emailIsValid,
}) {
  const handleClick = () => {
    fetch(`http://10.58.52.96:3000/users/presignin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(res => res.json())
      .then(data => {
        const message = data.message;
        if (message === 'INVALID_USER') {
          handleModal('join');
        } else if (message === 'user is confirmed') {
          handleModal('password');
        }
      });
  };

  const closeModal = () => {
    handleModal();
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  return (
    <div className="loginModal">
      <div className="loginModalContainer">
        <header className="loginModalHeader">
          <GrClose onClick={closeModal} />
        </header>
        <main className="loginModalMain">
          <p className="modalGreeting">반가워요!</p>
          <h3 className="modalGreeting">점핏에서 커리어점프해요!</h3>
          <p className="inputNameIsEmail">이메일</p>
          <input
            className="modalInput"
            placeholder="이메일"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleClick} disabled={!emailIsValid}>
            점핏 시작하기
          </button>
          <div className="checkboxDiv">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="myCheckbox"
            />
            <label htmlFor="myCheckbox">자동 로그인</label>
          </div>
          <div className="divider">SNS로 3초만에 로그인</div>
          <div className="snsLogin">
            <img
              alt="naver"
              src="https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
            />
            <img
              alt="google"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            />
            <img
              alt="github"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJCsVdlHQKZFqiKGNTRozeUYlOSvi82JgKg&usqp=CAU"
            />
            <img
              alt="apple"
              src="https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black.png"
            />
          </div>
          <div className="isCompany">
            <p>
              기업 고객이신가요?
              <span>기업서비스 바로가기</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
