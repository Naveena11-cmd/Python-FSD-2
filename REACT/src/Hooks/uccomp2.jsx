import { useContext } from "react";
import { CN } from "./uccomp"; 

export default function UCC2() {
    const { number1, number2 } = useContext(CN);
    const result = number1 * number2;

    return (
        <>
            <p style={{ fontSize: '18px', color: 'orange' }}>
                Multiplication Result: <strong>{result}</strong>
            </p>
        </>
    )
}
