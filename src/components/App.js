import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';
const App = () => {
  const [dataFetched, setDataFetched] = useState(false);
  

  return (
    <>
        {!dataFetched && <Loader />}
        <Todo dataFetched={dataFetched} setDataFetched={setDataFetched}/>
    </>
  )
  
}


export default App;
