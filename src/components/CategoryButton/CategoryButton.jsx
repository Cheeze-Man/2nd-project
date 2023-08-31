import React from 'react';
import './CategoryButton.scss';

export default function CategoryButton({ className, text, onClick }) {
  return (
    <button className="categoryButton" onClick={onClick}>
      {text}
    </button>
  );
}
