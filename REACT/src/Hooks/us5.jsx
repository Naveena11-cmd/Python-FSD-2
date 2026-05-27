import { useState } from "react";
function US5() {
    const [task, settask] = useState("");
    const [todolist, settodolist] = useState([]);

    function handletask() {
        settodolist([...todolist, { id: Date.now(), name: task }]);
        settask('');
    }
    function handledelete(id) {
        settodolist(todolist.filter((t)=> t.id !== id));
    }
    return (
    <>
        <input type="text" value={task} onChange={(e) => settask(e.target.value)} required></input>
        <button onClick={handletask}>add</button>
        <div>
            {
                todolist.map((t) =>
                    <div key={t.id}>
                        <h3>{t.name}</h3>
                        <button onClick={()=>handledelete(t.id)}>delete</button>
                </div>)
            }
        </div>
    </>
)
}

export default US5;