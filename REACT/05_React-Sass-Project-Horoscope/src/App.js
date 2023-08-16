import React from "react"
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./scss/_reset.scss"
import "./scss/_mixins.scss"
import {data} from "./data"

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Main data = {data}/>
    </div>
  );
}

export default App;
