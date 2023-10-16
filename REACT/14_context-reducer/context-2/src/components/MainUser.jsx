import React, { useContext } from "react";
import { UserContext } from "../App";

const MainUser = ({user}) => {


    const{changeWidth} = useContext(UserContext)

  return (
    <div>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.login}</h3>
            <img src={item.avatar_url} alt="" width={item.width}/>
            <div>
              <label htmlFor={item.id}>Image width(px)</label>
              <input type="number" id={item.id} onChange={(e)=>changeWidth(e.target.value, item.id)}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainUser;
