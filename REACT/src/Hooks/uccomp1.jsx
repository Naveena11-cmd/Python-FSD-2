import { useContext } from "react";
import { CN } from "./uccomp";
import UCC2 from "./uccomp2";

export default function UCC1() {
    const { number1, number2 } = useContext(CN);
    
    return (
        <>
            <p>Input 1 : <strong>{number1}</strong></p>
            <p>Input 2 : <strong>{number2}</strong></p>
        </>
    )
}
