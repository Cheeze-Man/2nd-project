import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import './LoginModal.scss';

export default function LoginModal({ handleModal, setModalNum }) {
  // const [userInfo, setUserInfo] = useState({
  //   email: '',
  //   username: '',
  //   password: '',
  // });
  const [tokenInfo, setTokenInfo] = useState({});

  const handleClick = () => {
    handleModal();
    setModalNum(0);
  };

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   setUserInfo(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleLogin = () => {
  //   fetch('API주소', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: userInfo.email,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         // localStorage.setItem('accessToken', data.accessToken);
  //       }
  //     });
  // };

  // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const emailIsValid = emailPattern.test(userInfo.email);

  return (
    <div className="loginModal">
      <div className="loginModalContainer">
        <header className="loginModalHeader">
          <GrClose onClick={handleClick} />
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
            // value={userInfo.email}
            // onChange={handleInputChange}
          />
          <button
          // disabled={!emailIsValid}
          >
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
