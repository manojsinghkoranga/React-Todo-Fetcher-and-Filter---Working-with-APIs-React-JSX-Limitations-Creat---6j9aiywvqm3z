import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';
const App = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isIncompleted, setIsIncompleted] = useState(false);

  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
  }

  const handleIncompleted = () => {
    setIsIncompleted(!isIncompleted);
  }

  return (
    <>
        {dataFetched ? <Todo /> : <Loader />}
        Show completed <input type={'checkbox'} value={'Show Complete'} checked={isCompleted} onChange={handleCompleted}/>
        <br/>
        Show incompleted <input type={'checkbox'} value={'Show Complete'} checked={isIncompleted} onChange={handleIncompleted}/>
    </>
  )
  
}


export default App;
