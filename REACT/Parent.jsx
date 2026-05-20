import Child from "./Child.jsx";
import Child1 from "./Child1.jsx";
function Parent() {
    var n = "abc";
    var obj = {
        name: "Test",
        clg:"LJ"
    }
    return (
        <>
            <Child surname={n} age="20"/>   
            <Child surname="xyz" age={23} />
            <Child1 data={obj} />
        </>
    )
}
export default Parent;