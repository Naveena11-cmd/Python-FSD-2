function Map() {
    const students = [{ rollno: 1, name: "A", std: 5 },
        { rollno: 2, name: "B", std:3 },
        { rollno: 3, name: "C", std:5 },
        {rollno:4,name:"D",std:4}]

    return (
        <>
            {
                students.filter((s) => s.std === 5).map((s) =>
                    <div key={s.rollno}>
                        <h2>student name {s.name}</h2>
                        <h3>standard { s.std+1}</h3>
                </div>)
            }
        </>
    )
}
export default Map;