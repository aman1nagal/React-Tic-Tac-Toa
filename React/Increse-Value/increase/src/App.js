import React,{useState} from "react"
const App=()=> {
 const [increase,setIncrease] =useState(0 )
  return (

    <div>
      <h1>{increase}</h1>
      <button onClick={()=>{(setIncrease(increase>9?increase+1:""))}}>Increase</button>
      <button onClick={()=>{(setIncrease(increase>0?increase-1:""))}}>Decrease</button>
      <button onClick={()=>{setIncrease(0)}}>Reset</button>
    </div>
  );
}

export default App;
