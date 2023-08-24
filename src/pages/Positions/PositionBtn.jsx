import React, { useState } from 'react';
import './PositionBtn.scss';

export default function PositionBtn({ handleTechClick, jobGroup, onClick }) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(prev => !prev);
  }
  return (
    <button
      className={`positionBtn ${clicked ? 'clicked' : ''}`}
      onClick={() => {
        onClick();
        handleClick();
        handleTechClick();
      }}
    >
      {jobGroup}
    </button>
  );
}
