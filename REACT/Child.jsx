function Child(props) {
    return (
        <>
            <h1>surname : {props.surname}</h1>
            <h2>age : {props.age+1}</h2>
        </>
    )
}
export default Child;