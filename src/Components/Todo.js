import { useState } from "react"

const Todo=()=>{
    const[task,setTask]=useState("");
    const[taskArr,setTaskArr]=useState([]);
    function handleTask(){
        setTaskArr([...taskArr,task])
        setTask("");
    }
    function handleDelete(idx){
        var newArr=[...taskArr]
        var res=newArr.filter((item,index)=>idx!=index)
        setTaskArr(res);
    }
    return(
        <div>
            <div>
            <h1>To-Do List</h1>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}></input>
            <button onClick={handleTask}>Add Todo</button>
            </div>
                <div>
                    <ul>
                        {
                            taskArr.map((item,index)=>(
                               <div>
                                 <li style={{display:"inline"}}>{item}</li>
                                <button onClick={()=>handleDelete(index)}>Delete</button>
                               </div>
                            ))
                        }
                    </ul>
                </div>
            

        </div>
    )
}
export default Todo;