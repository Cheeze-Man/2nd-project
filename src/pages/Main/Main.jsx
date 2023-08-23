import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import LoginContainer from './LoginContainer';
import LoginModal from './LoginModal';
import ModalPassword from './Modals/ModalPassword';
import ModalJoin from './Modals/ModalJoin';
import './Main.scss';

export default function Main() {
  const [email, setEmail] = useState('');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailIsValid = emailPattern.test(email);

  const [modalStatus, setModalStatus] = useState('join');

  const handleModal = status => {
    setModalStatus(status);
  };

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
      <LoginContainer handleModal={handleModal} />
      <Footer />
    </div>
  );
}
