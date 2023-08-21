import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CategoryButton from '../../components/CategoryButton';

export default function Main() {
  return (
    <div>
      {/* <Nav /> */}
      Main Page
      <CategoryButton text="버튼" />
      <Footer />
    </div>
  );
}
