import {useContext, createContext } from "react";
var CN = createContext();
var Branch = createContext();
import UC2 from "./uc2";

export default function UC1() {
    return (
        <>
            <CN.Provider value='LJ University'>
                <Branch.Provider value='CSE'>
                    <UC2/>
                </Branch.Provider>
            </CN.Provider>
        </>
    )
}
export { CN,Branch}