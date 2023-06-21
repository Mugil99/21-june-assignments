import { useState } from "react";

const SumCalculator=()=>{
    const [num,setNum]=useState(0);
    
    function handleChange(e){
        const parsedValue=parseInt(e.target.value)
        setNum(num+parsedValue);
    }
    return(
        <div>
           <h1>Sum Calculator</h1>
           <input type="number" onChange={(e)=>handleChange(e)}></input>
           <p>Sum:{num}</p>
        </div>
    )
}
export default SumCalculator;