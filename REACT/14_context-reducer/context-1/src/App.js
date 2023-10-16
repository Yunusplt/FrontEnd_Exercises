import { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data"


export const StudentContext=createContext()

function App() {

  const [student, setStudent] = useState(data);

  const changeColor =(newRenk, id)=>{
    setStudent(
      student.map((item)=>item.id === id ? {...item, color:newRenk} : item)
    )
  }

  return (
 <StudentContext.Provider value={{student, changeColor}}>
 <Home/>
 </StudentContext.Provider>
  );
}

export default App;
