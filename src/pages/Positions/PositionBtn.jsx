import React from 'react';
import './PositionBtn.scss';

export default function PositionBtn({ isSelected, title, onClick }) {
  return (
    <button
      className={`positionBtn ${isSelected ? 'clicked' : ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
