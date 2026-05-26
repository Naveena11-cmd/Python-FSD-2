function Sproject(props) {
    return (
        <div>
            {
                props.data.map((d) =>
                    <div>
                        <h1>Projects : </h1>
                        <h2>Name : {d.name}</h2>
                        <h3>Description : {d.desc}</h3>
                        <img src={d.image} width='100'/>
                </div>)
            }
        </div>
    )
}

export default Sproject;