import React, {useEffect} from "react";
import { useState, useRef } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);


    // useEffect(() => {
    //    console.log('useEffect', count);
    //    return () => {
    //        console.log('useEffect uninstall')
    //    }
    // }, [count]);


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1);
                setTodos(todos.concat({text: count}))
            }}>
                Click me
            </button>
            {
                todos.map((v, i) => {
                    return <p key={i + '-' + v.text}>{v.text}</p>
                })
            }
        </div>
    );
}

export default Example