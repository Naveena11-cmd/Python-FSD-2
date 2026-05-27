import { useState } from "react";
import img1 from '../assets/p1.jfif';
import img2 from '../assets/p2.jfif';
import img3 from '../assets/p3.jfif';
import img4 from '../assets/i2.jfif'
import img5 from '../assets/i3.jfif'

function US4(){
    const a = [img1, img2, img3,img4,img5];
    const [image, setimage] = useState(a[0]);
    function handleimage() {
        const i = Math.floor(Math.random() * a.length);
        setimage(a[i]);
    }
    return (
    <>
        <img src={image} width='300' height='300'></img>
        <button onClick={handleimage}>change image</button>
    </>
)

}
export default US4;