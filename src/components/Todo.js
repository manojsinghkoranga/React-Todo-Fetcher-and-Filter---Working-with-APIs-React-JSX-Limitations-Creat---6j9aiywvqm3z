 import React, { useEffect, useState } from 'react';

 export const Todo  = (props) =>{

    const {dataFetched, setDataFetched} = props;
    const [isCompleted, setIsCompleted] = useState(true);
    const [isIncompleted, setIsIncompleted] = useState(true);

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            const json = await response.json();
            setFetchedData(json);
            setDataFetched(true);
        }
        fetchTodo();
    },[]);


    const handleCompleted = () => {
        setIsCompleted(!isCompleted);
    }

    const handleIncompleted = () => {
        setIsIncompleted(!isIncompleted);
    }
    
    return(
        <>{dataFetched &&
            <>
                {
                    fetchedData.map((obj) => {
                        
                    })
                }
                <div id="filter-holder">
                    Show completed <input id="completed-checkbox" type={'checkbox'} value={'Show Complete'} checked={isCompleted} onChange={handleCompleted} />
                    <br/>
                    Show incompleted <input id="incompleted-checkbox" type={'checkbox'} value={'Show Complete'} checked={isIncompleted} onChange={handleIncompleted}/>
                </div>
            </>
            }          
        </>
    )
 }