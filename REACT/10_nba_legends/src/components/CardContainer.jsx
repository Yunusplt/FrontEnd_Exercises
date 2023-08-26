import React, { useState } from "react";
import Card from "./Card";
import { data } from "../helpers/data";

const CardContainer = () => {
    
    const[search, setSearch] = useState("")

  return (
    <>
      <form>
        <div className="form-group container w-50 mb-4 mt-4">
          <input
            type="search"
            className="form-control"
            placeholder="Search a player..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      <div className="container d-flex flex-row flex-wrap justify-content-center gap-4">
        {data.filter(item=>item.name.toLowerCase().includes(search.trim().toLowerCase())).map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default CardContainer;
