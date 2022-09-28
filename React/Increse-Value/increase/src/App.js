import React,{useState} from "react"
const App=()=> {
 const [increase,setIncrease] =useState(5)
  return (

    <div>
      <h1>{increase}</h1>
      <button onClick={()=>(increase<9?setIncrease(increase+1):"")}>Increase</button>
      <button onClick={()=>(increase>0?setIncrease(increase-1):"")}>Decrease</button>
      <button onClick={()=>{setIncrease(0)}}>Reset</button>
    </div>
  );
}

export default App;
