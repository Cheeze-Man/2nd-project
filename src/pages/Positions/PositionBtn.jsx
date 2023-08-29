import React from 'react';
import './PositionBtn.scss';

export default function PositionBtn({ isSelected, title, onClick }) {
  return (
    <button
      // 실제 선택되었는지 아닌지에 대한 정보는, searchParams에서 파악해야 함
      className={`positionBtn ${isSelected ? 'clicked' : ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
