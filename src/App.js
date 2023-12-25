import "./style.css";
import Header from "./Header/Header.js";
import Count from "./Count/Count.js";
import SubHeader from "./Header/SubHeader/SubHeader.js";
import { useState } from "react";
import { setTextRange } from "typescript";

 export default function App() {
  let [countList,setcountList]=useState([
    { id: 0, value: "Read SpringBoot" },
    { id: 1, value: "Complete assignments" },
    { id: 2, value: "Prepare breakfast" },
    { id: 3, value: "Sleep for 2 hours" },
    {id : 4, value: "Take a shower"}
  ]);

  function handleClick(){
    setcountList([{id:99999,value:"Nothing to do Buddy! Sleep"}]);
  }

   let listItems = countList.map((num) => (
        <li key={num.id}>
        <p>{num.value}</p>
      </li>
    ));
  
      return ( 

      <div className="App">
        <Header />
  
        <hr />
        <ul>{listItems}</ul>

        <button onClick={handleClick} >Empty</button> 
      
      </div>
    );
  }