import React, { useState } from "react";

function Child1(porps) {
    console.log(porps);
    const { num, handleClick } = porps;
    return (
        <div
            onClick={() => {
                handleClick(num + 1);
            }}
        >
            {num}
            child
        </div>
    );
}

function Child2(porps) {
    // console.log(porps);
    const { text, handleClick } = porps;
    return (
        <div>
            child2
            <Grandson text={text} handleClick={handleClick} />
        </div>
    );
}

function Grandson(porps) {
    console.log(porps);
    const { text, handleClick } = porps;
    return (
        <div
            onClick={() => {
                handleClick(text + 1);
            }}
        >
            {text}
            grandson
        </div>
    );
}

function Parent() {
    let [num, setNum] = useState(0);
    let [text, setText] = useState(1);

    return (
        <div>
            <Child1 num={num} handleClick={setNum} />
            <Child2 text={text} handleClick={setText} />
        </div>
    );
}

export default Parent
