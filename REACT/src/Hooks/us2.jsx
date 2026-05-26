import img1 from '../assets/p1.jfif';
import img2 from '../assets/p2.jfif';
import img3 from '../assets/p3.jfif';
import { useState } from 'react';

function US2() {
    const [count, setcount] = useState(0);
    const [image, setimage] = useState(img1);

    function handleinc() { if (count < 50) { setcount(count + 1) } }
    function handledec() { if (count > 0) { setcount(count - 1) } }
    function handleimage() {
        if (image === img1) { setimage(img2) }
        else if(image===img2){setimage(img3)}
        else{setimage(img1)}
    }
    return (
        <>
            <button onClick={handleinc}>Increment</button>
            <button onClick={handledec}>Decrement</button>
            <h2>Count : {count}</h2>
            <button onClick={handleimage}>Change Image</button>
            <img src={ image} width='300'></img>
        </>
    )
}
export default US2;