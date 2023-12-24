import "./style.css";
import Header from "./Header/Header.js";
import Count from "./Count/Count.js";
import SubHeader from "./Header/SubHeader/SubHeader.js";

const countList = [
  { id: 0, value: "Read SpringBoot" },
  { id: 1, value: "Complete assignments" },
  { id: 2, value: "Prepare breakfast" },
  { id: 3, value: "Sleep for 2 hours" },
  {id : 4, value: "Take a shower"}
];

const listItems = countList.map((num) => (
  <li key={num.id}>
    <p>{num.value}</p>
  </li>
));

  export default function App() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
        
        <hr />
  
        <Count data="10" />
        <Count data="20"></Count>
        
        <hr />
        <ul>{listItems}</ul>
        <hr />

        <Count />
        <Count label="Counted till" />
        <hr />
      </div>
    );
  }
