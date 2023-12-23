import "./style.css";
import Header from "./Header/Header.js";
import Count from "./Count/Count.js";
import SubHeader from "./Header/SubHeader/SubHeader.js";
import Items from "./Items.js";

  export default function App() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
        
        <hr />
  
        <Count data="10" />
        <Count data="20"></Count>
        <hr />
        <Items />
        <hr />
        <Count />
        <Count label="Counted till" />
        <hr />
      </div>
    );
  }
