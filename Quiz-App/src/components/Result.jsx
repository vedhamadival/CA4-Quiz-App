/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Result({score , restartQuiz}) {

  const [backgroundColor, setbackgroundColor] = useState('black')
  const percentage = (score/5 *100)


  const toggle = () => {
    const togglebtn = document.getElementById('toggle');
    setbackgroundColor((prevColor) => (prevColor === 'white' ? 'black' : 'white'));
    togglebtn.innerText = backgroundColor === 'white' ? 'LIGHT' : 'DARK';
    document.body.style.backgroundColor = backgroundColor === 'white' ? 'black' : 'white';
  };


  return (
    <>
    <div id="header">
    <p>FRIENDS QUIZ</p>
    <button id="toggle" onClick={toggle}>DARK</button>
    </div>

    <div id="result-container">
        <div id="results">
            <p>Final Results</p>
            <span>{score} Out of 5 Correct</span>
            <h1>{percentage}%</h1>
        </div>
    </div>
    <div  id="restart-btn">
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
    </>
  )
}

export default Result
