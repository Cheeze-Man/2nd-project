import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PositionApplyBtn.scss';

export default function PositionApplyBtn() {
  const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalOpen = () => {
      setIsOpen(true);
    };

    const modalClose = () => {
      setIsOpen(false);
    };
  };

  return (
    <button onClick={modalOpen} className="positionStickyResumeBtn">
      <Link to="" className="positionStickyResumeBtnStyle">
        지원하기
      </Link>
    </button>
  );
}
