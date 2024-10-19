//CONTEXT API 


import { useState } from "react";

function App(){

  const [count, setCount] = useState(0);
return <div>
  <Count count={count}/>


</div>  
}


function Count({count, setCount}){
  return <div>
    <Countrenderer/>
     {count}
     <Buttons count={count} setCount= {setCount}/>
  </div>

}

function Countrenderer({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}){

  return <div>
    <button onClick={()=>{
  setCount(count +1)
    }}>Increase</button>
    <button onClick={()=>{
  setCount(count -1)
    }}>Decrease</button>
  </div>

}




export default App;





//In this code we need to pass the {count} in Countrenderer component without being passed on the Count component???????

// For this create a new file with the names Context.jsx( or anything that u want ) which has a context in it 

//CONTEXT API 


import { useContext, useState } from "react";
import { CountContext } from "./assets/Context";

function App(){
// The CountContext.Provider wraps around the Count component to make the count value available to it and any of its child components
  const [count, setCount] = useState(0);
return <div>
  <CountContext.Provider value={count}>  
  <Count setCount={setCount}/>
  </CountContext.Provider>    
  </div>  
}


function Count({setCount}){
  return <div>
    <Countrenderer/>
     <Buttons setCount= {setCount}/>
  </div>

}

function Countrenderer(){
  const count = useContext(CountContext)   // anyone who wants to use the count variable can just use this 
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)

  return <div>
    <button onClick={()=>{
  setCount(count +1)
    }}>Increase</button>
    <button onClick={()=>{
  setCount(count -1)
    }}>Decrease</button>
  </div>

}


export default App;


