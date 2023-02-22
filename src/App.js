import React, { useState } from 'react'
import Board from './Board'
import './App.css'

export default function App (){
    const [point,setPoint]=useState(0)
    const [highPoint,setHighPoint]=useState(0)
    const [winState,setWinState]=useState(false)

    function calculatePoint(clicked){
        //i have to create a new point variable because the state hook doesn't update immediately
        let newpoint=point+1
        if(!clicked){
            setPoint(newpoint)
            if(newpoint===10){
                setWinState(true)
                setHighPoint(highPoint=>(highPoint<newpoint)?newpoint:highPoint)
                setPoint(0)
            }

            return
        }
        
        setHighPoint(highPoint=>(highPoint<newpoint)?newpoint:highPoint)
        setPoint(0)
        
        return
    }

    function restart(){
        setPoint(0)
        setWinState(false)
    }


    return(
        <div className='container'>
            <div className='point'>
            <p>Current point:{point}</p>
            <p>High point:{highPoint}</p>
            </div>
            <Board calculatePoint={calculatePoint} restart={restart} winState={winState}></Board>
        </div>
    )
}