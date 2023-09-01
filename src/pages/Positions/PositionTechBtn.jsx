import React, { useState } from 'react';
import './PositionTechBtn.scss';

export default function PositionTechBtn({ techImg, techList }) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div>
      <button
        className={'positionTechBtn ' + (clicked ? 'clicked' : '')}
        onClick={handleClick}
      >
        <div>
          <img src={techImg} alt="" />
          {techList}
        </div>
      </button>
    </div>
  );
}
