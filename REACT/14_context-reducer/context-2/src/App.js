import { useState } from "react";
import ShowUsers from "./pages/ShowUsers";
import { useEffect } from "react";
import { createContext } from "react";

export const UserContext=createContext()

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []) // eslint-disable-line

  const changeWidth=(newWidth, id)=>{
    setUser(
      user.map((item)=>item.id === id ? {...item, width:newWidth} : item)
    )
  }

  return (
    <UserContext.Provider value={{user,changeWidth}}>
      <ShowUsers />
    </UserContext.Provider>
  );
}

export default App;
