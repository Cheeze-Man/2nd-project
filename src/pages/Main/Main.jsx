import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import LoginContainer from './LoginContainer';
import LoginModal from './LoginModal';
import './Main.scss';
import ModalPassword from './Modals/ModalPassword';
import ModalJoin from './Modals/ModalJoin';

export default function Main() {
  const [email, setEmail] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalNum, setModalNum] = useState(1);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  let modal;
  if (showModal && modalNum === 0) {
    modal = (
      <LoginModal
        email={email}
        setEmail={setEmail}
        handleModal={handleModal}
        setModalNum={setModalNum}
      />
    );
  } else if (showModal && modalNum === -1) {
    modal = (
      <ModalJoin
        email={email}
        setEmail={setEmail}
        handleModal={handleModal}
        setModalNum={setModalNum}
      />
    );
  } else if (showModal && modalNum === 1) {
    modal = (
      <ModalPassword
        email={email}
        handleModal={handleModal}
        setModalNum={setModalNum}
      />
    );
  }

  return (
    <div className="main">
      {modal}
      <Nav />
      <LoginContainer handleModal={handleModal} />
      <Footer />
    </div>
  );
}
