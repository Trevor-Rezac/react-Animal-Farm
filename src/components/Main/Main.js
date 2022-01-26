import React from 'react';
import './Main.css';
import backgroundImg from './background.png';

export default function Main(props) {
  
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}></main>
  );
}
