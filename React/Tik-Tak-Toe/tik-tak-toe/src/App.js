import Icon from './Components/Icon.js';
import './App.js';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const tictaktoeAray=new Array(9).fill("")
const App=()=>{
  const [isCross,setIsCross]=useState(true)
  const [winMsg,setWinMsg]=useState("")
  //Reset Games
  function resetGame(){
    tictaktoeAray.fill("")
    setIsCross(true)
    setWinMsg("")
  }
  // Check for Winner
  function checkWinner(){
    if(tictaktoeAray[0]==tictaktoeAray[1]&&tictaktoeAray[1]==tictaktoeAray[2]&&tictaktoeAray[0]!=""){
      setWinMsg(tictaktoeAray[0]+ "Won The Game")
    }
    else if(tictaktoeAray[3]==tictaktoeAray[4]&&tictaktoeAray[4]==tictaktoeAray[5]&&tictaktoeAray[3]!=""){
      setWinMsg(tictaktoeAray[3]+" Won The Game")
    }else if(tictaktoeAray[6]==tictaktoeAray[7]&&tictaktoeAray[7]==tictaktoeAray[8]&&tictaktoeAray[6]!=""){
      setWinMsg(tictaktoeAray[6]+" Won The Game")
    }else if(tictaktoeAray[0]==tictaktoeAray[3]&&tictaktoeAray[3]==tictaktoeAray[6]&&tictaktoeAray[0]!=""){
      setWinMsg(tictaktoeAray[0]+" Won The Game")
    }else if(tictaktoeAray[1]==tictaktoeAray[4]&&tictaktoeAray[4]==tictaktoeAray[7]&&tictaktoeAray[1]!=""){
      setWinMsg(tictaktoeAray[1]+" Won The Game")
    }else if(tictaktoeAray[2]==tictaktoeAray[5]&&tictaktoeAray[5]==tictaktoeAray[8]&&tictaktoeAray[2]!=""){
      setWinMsg(tictaktoeAray[2]+" Won The Game")
    }else if(tictaktoeAray[0]==tictaktoeAray[4]&&tictaktoeAray[4]==tictaktoeAray[8]&&tictaktoeAray[0]!=""){
    setWinMsg(tictaktoeAray[0]+" Won The Game")
    }else if(tictaktoeAray[2]==tictaktoeAray[4]&&tictaktoeAray[4]==tictaktoeAray[6]&&tictaktoeAray[2]!=""){
      setWinMsg(tictaktoeAray[2]+" Won The Game")
    }
  }
  function playgame(index){
    if(winMsg)
    {
      return toast("Game has already got over")
    }else if(tictaktoeAray[index]!=""){
       return toast("Already Filled")
    }
    else{
      tictaktoeAray[index]=isCross?"Cross":"Circle"
      setIsCross(!isCross)
      console.log(tictaktoeAray[index])
    }
    checkWinner()
  }
  return(
    <div className='app-body'>
      <ToastContainer position='bottom-center'/>
      <h1>Lets Play Tic Tac Toe </h1>
      {winMsg ?(
        <div> 
        <h2>{winMsg}</h2>
        <button onClick={resetGame}>Play Again</button>
        </div>
      ):(
        <h1>{isCross?"Cross":"Circle"}'s Turn</h1>
      )}
      <div className="container">
        {tictaktoeAray.map((value,index)=>(
          <div className='item1' onClick={()=>playgame(index)}>
            <Icon icon={value}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
