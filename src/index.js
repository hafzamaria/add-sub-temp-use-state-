import React from 'react'
import {useState} from "react";
import ReactDOM from "react-dom";
import "./style.css";

 const App = () =>{
  
  const [prob,setProb]=useState(0);

  const IncNum =()=>{
    setProb(prob +1);
  };

  const DeNum =()=>{
    setProb( prob-1);
  }
  return(
    <div className='main'>

    <h2>You can add & subtract here</h2>

    <button onClick={IncNum}>+</button>


    <h1>{prob}</h1>
    
    <button onClick={DeNum}>-</button>
    </div>

  )
 }
   ReactDOM.render(< App/>, document.querySelector("#root"));
