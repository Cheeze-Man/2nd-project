import React from 'react';
import '../components/CategoryButton.scss';

export default function CategoryButton({ className, text, onClick }) {
  return (
    <button className="categoryButton" onClick={onClick}>
      {text}
    </button>
  );
}
