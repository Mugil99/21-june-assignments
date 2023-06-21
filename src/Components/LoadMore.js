
import { useState } from 'react';

function LoadMore() {
  const[count,setCount]=useState(10)
  const[load,setLoad]=useState(false);
  const[arr,setArr]=useState([])
  function handleLoad(){
    setLoad(true);
    var newArr=Array(count).fill(''); //only giving the length doesnot iterate...
    console.log(newArr);              // we have to fill to iterate
    setArr(newArr)
    setCount(count+10);
  }
  return (
   <div>
     {
      load&&
      <ul>
        {arr.map((_,index)=>(
          <li>Item{index+1}</li>
        ))}
      </ul>
     }
     <button onClick={handleLoad}>Load More</button>
   </div>
  );
}

export default LoadMore;
