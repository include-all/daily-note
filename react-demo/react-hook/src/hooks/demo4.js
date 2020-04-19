import React,{useState,memo,useMemo,useCallback} from 'react';

function SubCounter({onClick,data}){
    console.log('SubCounter render');
    return (
        <button onClick={onClick}>{data.number}</button>
    )
}
SubCounter = memo(SubCounter);

export  default  function Counter6(){
    console.log('Counter render');
    const [name,setName]= useState('计数器');
    const [number,setNumber] = useState(0);
    const data ={number};
    const addClick = ()=>{
        setNumber(number+1);
    };
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <SubCounter data={data} onClick={addClick}/>
        </>
    )
}
