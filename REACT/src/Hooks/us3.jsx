import { useState } from "react";

function US3() {
    const [text, settext] = useState('LJ University');
    const [color, setcolor] = useState('red');
    const [hsl, sethsl] = useState('Hide');     //height state label
    const [hsltext, sethsltext] = useState('React JS');
    function handlecolor() {
        if (color === 'red') {
            setcolor('blue')
        }
        else {
            setcolor('red')
        }
    }

    function handletext() {
        if (text === 'LJ University') {
            settext('Welcome Students');
        }
        else {
            settext('LJ University');
        }
    }

    function handlehsl() {
        if (hsl === 'hide') {
            sethsl('show');
            sethsltext('');
        }
        else {
            sethsl('hide')
            sethsltext('React JS')
        }
    }

    return (
        <>
            <button onDoubleClick={handlecolor}>change color</button>
            <button onClick={handletext}>change text</button>
            <button onClick={handlehsl}>{hsl}</button>
            <h1 style={{ color: color }}>{text}</h1>
            <h2>{ hsltext}</h2>
        </>
    )
}

export default US3;