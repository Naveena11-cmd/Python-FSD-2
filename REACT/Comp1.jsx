import img1 from "./src/assets/hero.png";
import "./src/MyApp.css";
function Comp1() {
    var n = "abc";
    var c = { color: "red", fontSize: "30px" };
    return (<>
        <h1 style={{ color: "blue", fontSize: "50px", textTransform:"uppercase"}}>Hi { n}</h1>
        <h2 style={c}>hello</h2>
        <img src={img1} className="i1"></img>
        <br></br>
        <img src="/public/favicon.svg" className="i1"></img>
        </>
    )
}
export default Comp1;