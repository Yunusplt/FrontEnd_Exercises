import "./App.css";
import People from "./components/People";
import Clock from "./components/Clock";
import OrnekUseEffect from "./components/OrnekUseEffect";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


function App() {

  const[show,setShow] = useState(false)

  return (
    <div>
      <People />
      <button className="btn btn-info" onClick={()=>setShow(!show)}>Saati ve Sayaci göster</button>
      {show ? <Clock /> : ""}
      {show ? <OrnekUseEffect /> : ""}
    </div>
  );
}

export default App;
