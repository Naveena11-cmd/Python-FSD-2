function Events() {
    const myclick = (n) => {
        alert(`hello ${n}`);
    }
    return (
        <>
            <button onClick={()=>myclick ('naveena')}>click here</button>
        </>
    )
}
export default Events;