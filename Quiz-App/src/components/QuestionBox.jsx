/* eslint-disable no-unused-vars */
import { useState  , useEffect} from 'react'
import questions from '../components/QuestionData'
import Result from './Result'


function QuestionBox() {
    const [ questionIndex, setquestionIndex] = useState(0)
    const [backgroundColor, setbackgroundColor] = useState('black')
    const [highlighted, setHighlighted] = useState(false);
    const [score, setScore] = useState(0);
    const [showresult , setShowresult] = useState(false)
    useEffect(() => {
        console.log("Updated Score:", score);
      }, [score]);

    const handleClick = (e) =>{
        if(questionIndex<questions.length-1){
            setquestionIndex(questionIndex+1)
            if(e.target.attributes.iscorrect.value === "true"){
                setScore((prevscore)=> prevscore + 1)
            }
        }
        else{
            if(e.target.attributes.iscorrect.value === "true"){
            setScore((prevscore)=> prevscore + 1)
            }
            setShowresult(true)
        }
        console.log(e.target.attributes.iscorrect.value === "true")    
    }

    const restartQuiz = () => {
        setquestionIndex(0);
        setScore(0);
        setShowresult(false);
      };

    if(showresult){
        return <Result score={score} restartQuiz={restartQuiz}/>;
    }

    const toggle = () => {
        const togglebtn = document.getElementById('toggle');
        setbackgroundColor((prevColor) => (prevColor === 'white' ? 'black' : 'white'));
        togglebtn.innerText = backgroundColor === 'white' ? 'LIGHT' : 'DARK';
        document.body.style.backgroundColor = backgroundColor === 'white' ? 'black' : 'white';
      };

    const handleHighlight = () =>{
        const text = document.getElementById('question')
        setHighlighted(true);
        text.style.color ='#FF00A8'
        // console.log('pink')
    }

    const HandleRemoveHighlight = () =>{
        const text = document.getElementById('question')
        setHighlighted(false);
        text.style.color ='White'
        // console.log('white')
    }

  return (
    <>
    <div id="header">
    <p>FRIENDS QUIZ</p>
    <button id="toggle" onClick={toggle}>DARK</button>
    </div>

    <div id="question-container">
        <div id="question-box">
            <span id="span">Question: {questionIndex+1} Out of {questions.length}</span>
            <p id="question">{questions[questionIndex].text}</p>

            {questions[questionIndex].options.map((option)=>{
                return (
                <div key={option.id}>
                <button onClick={(e) => {handleClick(e)}} iscorrect={option.isCorrect.toString()}>{option.text}</button>
                </div>
                ) 
            })}
        </div>
    </div>

    <div id="forhighlight">
        <button id="highlight" onClick={handleHighlight}>HIGHLIGHT</button>
        <button id="remove-highlight" onClick={HandleRemoveHighlight}>REMOVE HIGHLIGHT</button>
    </div>
    </>
  )
}

export default QuestionBox
