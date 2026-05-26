import { useState } from "react";
function US1() {
    const [count, setcount] = useState(0);
    return (
        <>
            <button onClick={()=>setcount(count+1)}>Click</button>
            <h2>Count : {count}</h2>
        </>
    )
}
export default US1;
