function Events1() {
    const handlesubmit = (e) => {
        e.preventDefault();
        var u = document.getElementById('un').value;
        console.log(`Welcome ${u}`);
    }

    const handlechange=(e)=> {
        document.getElementById('text').innerHTML = e.target.value;
        console.log(e.target.value);
    }

    const handledoubleclick=()=> {
        console.log("double clicked")
    }

    const handleclick=() =>{
        console.log("clicked")
    }

    return (
        <>
            <br/>
            <form onSubmit={handlesubmit}>
                <input type="text" id="un" onChange={handlechange} />
                <br/>
                <input type="submit"></input>
                <br />
            </form>
            <h3 id="text"></h3>
            <button onDoubleClick={handledoubleclick} onClick={handleclick}>Click</button>
        </>
    )
}
export default Events1 