import { useState } from 'react';
import './App.css';

import data from  "./api.js";
import Quiz from './Quiz.js';
function App() {
  const newData = {
    ...data,
    quizData: data.quizData.map((element) => ({
      ...element,
      options:[...element.incorrect_answers,element.correct_answer],
    
    })
   
    ),
  };
  console.log(newData);
  const [d,setD]=useState(newData);
  return (
    <div className="App">
      <Quiz d1={d.quizData}/>
    </div>
  );
}

export default App;
