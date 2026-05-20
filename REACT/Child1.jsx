function Child1(props) {
    return (
        <>
            <h1 style={{ color: "blue", textDecoration: "underline" }}>Welcome {props.data.name} to {props.data.clg} </h1>
        </>
    )
}
export default Child1;