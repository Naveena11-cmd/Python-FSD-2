import { useEffect, useState } from "react";
import axios from "axios";
export default function A2() {
    const [image, setimage] = useState("");
    function getimage() {
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((r) => { console.log(r.data), setimage(r.data) })
            .catch((e) => { console.log(e) })
    }
    useEffect(getimage,[])
    return (
        <>
            <button onClick={getimage}>Get image</button>
            <img src={image.message} alt="dogg" height="300" width="300"></img>
            {/* <a href={image.link} target="_blank">Click here</a> */}
        </>
    )
}