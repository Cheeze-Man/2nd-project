import React, { useEffect, useState } from 'react';
import { emailPattern } from '../../util/constants';
import LoginModal from './LoginModal';
import ModalPassword from './Modals/ModalPassword';
import ModalJoin from './Modals/ModalJoin';
import Nav from '../../components/Nav/Nav';
import BannerContainer from './BannerContainer';
import LoginContainer from './LoginContainer';
import Footer from '../../components/Footer/Footer';
import CollectionByTheme from './CollectionByTheme';
import './Main.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

export default function Main() {
  const token = localStorage.getItem('token');

  const [email, setEmail] = useState('');
  const emailIsValid = emailPattern.test(email);

  const [modalStatus, setModalStatus] = useState('');

  const handleModal = status => {
    setModalStatus(status);
  };

  //토큰 유무에 따른 조건문 필요한가..?
  useEffect(() => {
    fetch(`${BASE_URL}/users/presignin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ accessToken: token }),
    }).then(res => res.json());
  }, []);

  const MODAL_MAP = {
    login: (
      <LoginModal
        email={email}
        setEmail={setEmail}
        handleModal={handleModal}
        emailIsValid={emailIsValid}
      />
    ),
    join: (
      <ModalJoin email={email} setEmail={setEmail} handleModal={handleModal} />
    ),
    password: <ModalPassword email={email} handleModal={handleModal} />,
  };

  return (
    <div className="main">
      {MODAL_MAP[modalStatus]}
      <Nav />
      <div className="mainTop">
        <BannerContainer />
        <div className="mainTopRight">
          <LoginContainer handleModal={handleModal} />
          <div className="noticeContainer">
            <h3>Notice</h3>
            <div className="noticeTitle">
              <a
                target="black"
                rel="noopener noreferrer"
                href="https://team.jumpit.co.kr/68293c6c-fc89-4a70-aeb3-4155ee5b0095"
              >
                개인정보 처리방침 개정에 대해 안내드립니다. (20230822)
              </a>
              <p className="noticeDate">2023-08</p>
            </div>
          </div>
        </div>
      </div>
      <CollectionByTheme />
      <Footer />
    </div>
  );
}
