import React, {useState} from 'react';
import './App.css';

interface IProps {
    inputchecked:boolean,
    inputVal:string
}

const App= (props:IProps) =>{
  const [counter,setCounter] =useState(0)
  const [checked,setChecked] =useState(false)
  const [val,setVal] =useState("")
  const {inputchecked,inputVal} = props;
    return (

    <div className="App">
      <h1>this is counter app</h1>
      <div id="counter-value">{counter}</div>
      <div>
        <button id="increment-btn" onClick={()=>{setCounter(counter+1)}}>increment-btn</button>
        <button id="decrement-btn" onClick={()=>{setCounter(counter-1)}}>decrement-btn</button>
      </div>
       <div>
           <input type="checkbox" id="check" checked={inputchecked} onChange={()=>{setChecked(!checked)}}/>
       </div>
        <div>
            <input type="text" id="ipt" value={inputVal} />
        </div>
    </div>
  );
}

export default App;
