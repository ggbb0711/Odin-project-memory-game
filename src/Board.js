import React, { useEffect, useState } from 'react'

export default function Board(props){
    const [data,setData]=useState([
        {
            name:'Card 1',
            clicked:false
        },
        {
            name:'Card 2',
            clicked:false
        },
        {
            name:'Card 3',
            clicked:false
        },
        {
            name:'Card 4',
            clicked:false
        },
        {
            name:'Card 5',
            clicked:false
        },
        {
            name:'Card 6',
            clicked:false
        },
        {
            name:'Card 7',
            clicked:false
        },
        {
            name:'Card 8',
            clicked:false
        },
        {
            name:'Card 9',
            clicked:false
        },
        {
            name:'Card 10',
            clicked:false
        },
    ]
    )
    let [winState,setWinState]=useState(props.winState)

    function resetData(){
        setData(data=>data.map(data=>{
            data.clicked=false
            return data
        }))
        console.log(data)
    }

    function randomSort(){
        let clone=[...data]

        for(let i=clone.length-1;i>0;i--){
            const j =Math.floor(Math.random()*(i+1))
            const temp=clone[i]
            clone[i]=clone[j]
            clone[j]=temp
        }

        setData(clone)
    }

    function handleClick(index){
        

        let clone=data
        if (clone[index].clicked){
            props.calculatePoint(clone[index].clicked)
            resetData()
            randomSort()

            return
        }
        props.calculatePoint(clone[index].clicked)
        clone[index].clicked=true

        randomSort()

        return
    }

    function handleRestart(){
        resetData()
        randomSort()
        props.restart()
    }

    useEffect(()=>{
        setWinState(props.winState)
    },[props.winState])

    useEffect(()=>{
        randomSort()
    },[])



    return (
        <div className='board'>
            {winState?
                (<div className='win-screen'>
                    <h1>You win</h1>
                    <button onClick={handleRestart}>Restart ?</button>
                </div>):
                (<>
                    {data.map((card,index)=>{
                            return(
                                <div onClick={()=>handleClick(index)} key={index}>
                                    <h1>{card.name}</h1>
                                </div>
                            )
                    })}
                </>)
        }
        </div>
        
    )
}