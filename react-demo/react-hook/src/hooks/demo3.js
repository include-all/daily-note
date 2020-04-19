import React, { useState } from "react";


function Counter2(){
    let [number,setNumber] = useState(0);
    //点击按钮之后  哪怕再去变化值，都固定取点击时的值了
    function alertNumber(){
        setTimeout(()=>{
            // alert 只能获取到点击按钮时的那个状态
            alert(number);
        },3000);
    }
    function lazy(){
        setTimeout(() => {
            // setNumber(number+1);
            // 这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
            setNumber(number=>number+1);
        }, 3000);
    }
    return (
        <>
            <p>{number}</p>
            <button onClick={()=>setNumber(number+1)}>+</button>
            <button onClick={alertNumber}>alertNumber</button>
            <button onClick={lazy}>lazy</button>
            <p>==============================</p>
            <Counter3/>
        </>
    )
}

export default Counter2


function Counter3(){
    const [counter,setCounter] = useState({name:'计数器',number:0});
    console.log('render Counter');
    // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
    return (
        <>
            <p>{counter.name}:{counter.number}</p>
            <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
            <button onClick={()=>setCounter(counter)}>++</button>
        </>
    )
}