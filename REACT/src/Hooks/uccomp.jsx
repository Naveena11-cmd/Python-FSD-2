// Write a reactJS program to perform the tasks as asked below.
// •	Create one main file (parent file) name Comp.js and other 3 component files Comp1.js, Comp2.js, Comp3.js. 
// •	Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate multiplication of the numbers using useContext


import { useContext, createContext } from "react";
var CN = createContext();
import UCC1 from "./uccomp1"; 
import UCC2 from "./uccomp2";

export default function UCC() {
    return (
        <>
            <h2>Multiplication</h2>
            <CN.Provider value={{ number1: 6, number2: 7 }}>
                <UCC1 /> 
                <UCC2 />
            </CN.Provider>
        </>
    )
}

export { CN }
