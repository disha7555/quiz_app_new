import React from 'react';
 import "./Quiz.css";
// import data from  "./api.js";
import { useState } from 'react';
const Quiz=({d1})=> {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< d1.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===d1[currentQuestion].correct_answer){
            setScore(score+1);
        }
    }
//     const [quizdata,setQuizData]=useState(data);
// setQuizData(quizdata.map((element) => {
//     const allOptions=[...element.incorrect_answers,element.correct_answer];
//     //const element.options=options;
//     const prop1 = "options";
//     element[prop1] = allOptions;
//     console.log(element)
//     return quizdata;
//   }))
const resetAll=()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
}
//const [quiz,setQuiz]=useState(indexi);
  return (
  <>
   {/* {d1.map((e,i)=>{ */}
  
 {/* return( */}
        <>
        <div>
            
            <h3 className='head'>Quiz App</h3>
            <div className ="container">
            {showResult ? (<div className='result'>     
                       <h4 style={{color:"#e0218a"}}>Your score:{score}</h4>
                <button className='button1' onClick={()=>resetAll()}>Reset All</button>
                </div>

                ):(
                <>
                <div className="question">
                    <h3> <span>{currentQuestion+1}</span><>.</>{d1[currentQuestion].question}</h3>
                </div>
                <div className='optionsNextbutton'>
                    <div className="options">
                
                    {d1[currentQuestion].options.map((option,ind)=>
                        { 
                            return(
                            <> 
                            <button className='optionButtons' key={ind+1} 
                            onClick={()=>setClickedOption(option)}>{option}</button>
                            <br/>
                            </> 
                        )
                    })
                    } 
                    </div>
                    <div className="nextButton">
                        <button className='button1' onClick={()=>{changeQuestion()}}>Next</button>
                    </div>
                </div>
                </> )}</div>
        </div>
        </>
    {/* ) */}
   {/* }
 
  )} */}
   </> 
    )
}

export default Quiz;
