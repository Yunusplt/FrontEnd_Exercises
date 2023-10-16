import { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data"


export const StudentContext=createContext()

function App() {

  const [student, setStudent] = useState(data);

  const chanceColor =()=>{
    //inputtaki renkleri degistirecek function
  }

  return (
 <StudentContext.Provider value={{student, chanceColor}}>
 <Home/>
 </StudentContext.Provider>
  );
}

export default App;
