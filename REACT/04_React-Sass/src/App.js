import React from "react"
// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_variable.scss"
import "./App.scss"
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import data from "./data"


function App() {
  return (
    <div>
      <Header/>
      <Card data={data}/>
    </div>
  );
}

export default App;
