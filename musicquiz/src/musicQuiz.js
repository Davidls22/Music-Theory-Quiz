import React, { useState} from 'react';
import questions from './QuizData'

function Quiz(){
    const [question,setQuestion] = useState(0);
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)


    const handleAnswerButtonClick = (answer) => {
        if(answer.correct === true){
            setScore(score +1)
        }
        const nextQuestion = question + 1;
        if(nextQuestion < questions.length){
            setQuestion(nextQuestion);
        } else{
            alert('you have finished the quiz')
            setShowScore(true)
        }
        
    }

    return(
        <div className = "App">
            {showScore ? (
                <div className = "Header">You have score {score} out of {questions.length}</div>
            ) : (
                <div>
             <div className = "Header1">Notation Quiz</div>
            <div className = "Header">Question {question + 1} of {questions.length} </div>
            <div className='Question'>{questions[question].questionText}</div>
            <div className = "Answers">
            {questions[question].answers.map((answer, index) => (
  <button key={index} onClick={() => handleAnswerButtonClick(answer)}>
    {answer.answerText}
  </button>
))}
</div>
            </div>
            )}
        </div>
    )}

    export default Quiz