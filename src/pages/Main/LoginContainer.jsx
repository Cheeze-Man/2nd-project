import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginContainer.scss';

export default function LoginContainer({ handleModal }) {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const username = localStorage.getItem('username');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    window.location.reload();
  };

  return token ? (
    <div className="loginContainer">
      <div className="loginContainerUserName">
        <p className="loginAnnouncement">{username}님 반가워요</p>
        <p className="logoutButton" onClick={handleLogout}>
          로그아웃
        </p>
      </div>
      <p className="loginContainerUserEmail">{email}</p>
      <div className="loginMenus">
        <div className="loginMenu" onClick={() => navigate('/resume/new')}>
          <p>📝</p>
          <p>이력서 작성</p>
        </div>
        <div className="loginMenu" onClick={() => navigate('/myjumpit')}>
          <p>😎</p>
          <p>마이점핏</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="loginContainer">
      <p className="loginAnnouncement">
        회원가입/로그인하고
        <br />
        점핏의 다양한 혜택을 만나보세요.
      </p>
      <button className="loginButton" onClick={() => handleModal('login')}>
        회원가입 / 로그인
      </button>
      <div className="snsLogin">
        <p>SNS로 3초만에 로그인</p>
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
    </div>
  );
}
