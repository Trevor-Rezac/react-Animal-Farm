import React from 'react';
import './Main.css';
import backgroundImg from './background.png';
import Animals from '../Animals/Animals.js';
// import { animals } from '../../animalList';

export default function Main(props) {
  const animalArr = props.animals;


  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>

      {animalArr.map((animal, i) => <Animals key={animal.name + i} name={animal.name} says={animal.says}></Animals>)}
    </main>
  );
}
